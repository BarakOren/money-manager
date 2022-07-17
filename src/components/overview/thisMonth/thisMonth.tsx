
import React from "react";
import styled from "styled-components";
import OverviewBar from "./overviewBar.tsx";

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
    top: 10%;
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
    const expenses: number = 1500
    const incomes: number = 2500
    const total: number = incomes - expenses;
    const checkRelations = incomes > expenses;

    return (
        <Container>
            <Name>This Month</Name>
            <Amount amount={total > 0}>{total}$</Amount>
            <OverviewBar width={checkRelations ? 95 : (incomes/ expenses) * 100} spendings={false} />
            <OverviewBar width={checkRelations ? (expenses / incomes) * 100 :  95} spendings={true} />
        </Container>
    )
}

export default ThisMonth;