import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../header.tsx";
import ThisMonth from "./thisMonth/thisMonth.tsx";
// import Loader from "../loader.tsx";
import ExpensesByType from "./expensesByType/expensesByType.tsx";
import Savings from "./savings/savings.tsx";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import AddButton from "../addbutton";
import Add from "../add/add";

const Container = styled.section`
    display: flex;
    margin-left: 15vw;
    width: 85%;
    height: 100vh;
    background-color: #161719;
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



const OverView: React.FC = ({loading}) => {
     const currentUser: Object = useSelector(state => state.userReducer.user)
     const navigate = useNavigate()
    useEffect(() => {
        if(!loading){
            if(currentUser === null){
                return navigate("/login")
            }
        }
       
    }, [currentUser, navigate])

    return (
        <Container >
            {!loading && currentUser &&
            <>
            <Header />
            <LeftCol>
                <ThisMonth />
                <Savings />
            </LeftCol>
            <RightCol>
                <ExpensesByType />
            </RightCol>
            <AddButton />
            </>
            }
        </Container>
    )
}

export default OverView;