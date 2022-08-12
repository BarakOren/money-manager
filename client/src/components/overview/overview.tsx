import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../header.tsx";
import ThisMonth from "./thisMonth/thisMonth.tsx";
// import Loader from "../loader.tsx";
import ExpensesByType from "./expensesByType/expensesByType.tsx";
import Savings from "./savings/savings.tsx";

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

    const [form, setForm] = useState({
        name: "test",
        position: "test",
        level: "test",
      });
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit() {
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/record/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
      }
      
     

    return (
        <Container>
            <Header />
            {/* <Loader /> */}
            <LeftCol>
                <button onClick={() => onSubmit()}>send</button>
                <button>get</button>
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