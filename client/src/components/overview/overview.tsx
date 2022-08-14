import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../header.tsx";
import ThisMonth from "./thisMonth/thisMonth.tsx";
// import Loader from "../loader.tsx";
import ExpensesByType from "./expensesByType/expensesByType.tsx";
import Savings from "./savings/savings.tsx";
import jwt from "jsonwebtoken";
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
    margin-left: 15vw;
    width: 85%;
    height: 100vh;
    background-color: #161719;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

const LeftCol = styled.div`
    width: 40%;
    height: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const RightCol = styled.div`
    width: 40%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`



const OverView: React.FC = () => {
    let navigate = useNavigate();
    const [quote, setQuote] = useState('')

    async function populateQuote() {
		const req = await fetch('http://localhost:5000/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
                
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			alert(data.error)
		}
	}
      
      useEffect(() => {
          const token = localStorage.getItem('token')
          if(token){
              const user = decodeToken(token)
              console.log(user)
              if(!user){
                  localStorage.removeItem('token')
                  return navigate("/login");
              } else {
                  populateQuote()
              }
          }
      }, [])
     
     
    return (
        <Container>
            <Header />
            {/* <Loader /> */}
            <LeftCol>
                <ThisMonth />
                <Savings />
            </LeftCol>
            <RightCol>
                <ExpensesByType />
            </RightCol>
        </Container>
    )
}

export default OverView;