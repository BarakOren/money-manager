
import React from "react";
import styled from "styled-components";
import OverviewBar from "./overviewBar.tsx";
import {user} from "../fakeData.js"


const Container = styled.section`
    width: 100%;
    height: 100px;
    padding: 30px 20px 10px 20px;
    background-color: #101113;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Name = styled.p`
    position: absolute;
    top: 20px;
    left: 5%;
    font-size: 1em;
    color: white;
    margin: 0;
`

const Amount = styled.h1`
    font-size: 5em;
    color: ${p => p.amount ? "white" : "#F06363"};
    margin: 0;
    z-index: 1;
    text-shadow: 0 0 10px black;
`


const ThisMonth: React.FC = () => {

    const {expenses, incomes} = user
    const totalExpenses: number = expenses.reduce((a, b) => a + b.spent, 0);
    const totalIncomes: number = incomes.reduce((a, b) => a + b.income, 0); 

    const total: number = totalIncomes - totalExpenses;
    const checkRelations: boolean = totalIncomes > totalExpenses;

    return (
        <Container>
            <Name>This Month</Name>
            <Amount amount={total > 0}>{total}$</Amount>
            <OverviewBar width={checkRelations ? 95 : (totalIncomes/ totalExpenses) * 100} spendings={false} />
            <OverviewBar width={checkRelations ? (totalExpenses / totalIncomes) * 100 :  95} spendings={true} />
        </Container>
    )
}

export default ThisMonth;