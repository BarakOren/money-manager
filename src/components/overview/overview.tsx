import React from "react";
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