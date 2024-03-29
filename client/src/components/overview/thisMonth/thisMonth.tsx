
import React from "react";
import styled, {keyframes} from "styled-components";
import OverviewBar from "./overviewBar.tsx";
import {user} from "../fakeData.js"
import { useSelector } from "react-redux";

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

const animation = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const Amount = styled.h1`
    font-size: 5em;
    color: ${p => p.amount ? "white" : "#F06363"};
    margin: 0;
    opacity: 0;
    animation: ${animation} 2s normal forwards ease-in-out;
    z-index: 1;
    animation-delay: 1s;
    text-shadow: 0 0 10px black;

`


const ThisMonth: React.FC = () => {

    const currentUser: Object = useSelector(state => state.userReducer.user)
    const {expenses, incomes}: Object[] = currentUser;

    const totalExpenses: number = expenses.reduce((a, b) => a + b.amount, 0);
    const totalIncomes: number = incomes.reduce((a, b) => a + b.amount, 0); 

    const total: number = totalIncomes - totalExpenses;
    const checkRelations: boolean = totalIncomes > totalExpenses;
    // incomes bigger than expenses = true
    
    return (
        <Container>
            <Name>This Month</Name>
            <Amount amount={total >= 0}>{total}$</Amount>
            {total === 0 ? 
            <>
             <OverviewBar width={1} spendings={false} />
             <OverviewBar width={1} spendings={true} />
            </>
            :
            <>
            <OverviewBar width={checkRelations ? 90 : (totalIncomes/ totalExpenses) * 100 - 10} spendings={false} />
            <OverviewBar width={checkRelations ? (totalExpenses / totalIncomes) * 100 - 10 :  90} spendings={true} />
            </>
            }
        </Container>
    )
}

export default ThisMonth;