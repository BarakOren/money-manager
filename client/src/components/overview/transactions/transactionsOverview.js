import React from "react";
import styled from "styled-components"

import TransactionRowOverView from "./transactionRowOverview"

const Container = styled.div`
    width: 100%;
    min-height: 150px;
    padding: 20px 20px;
    background-color: #101113;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px 0;
`

const FirstRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.p`
    font-size: 1em;
    color: white;
    margin: 0;
`

const ViewAllButton = styled.button`
    background: #191a1e;
    padding: 10px 20px;
    border: none;
    color: #4a4b4f;
    border-radius: 6px;
    &:hover {
        cursor: pointer;
    }
`


const TransactionsOverView = () => {

    const testData = [
        {
            id: 2315,
            type: "sent",
            date: "dec 24, 2021",
            to: "mom",
            amount: 12333
        },
        {
            id: 2412414,
            type: "recived",
            date: "dec 22, 2023",
            to: "dad",
            amount: 555
        },
    ]

    return (
        <Container>
            <FirstRow>
                <Name>Recent Transactions</Name>
                <ViewAllButton>View All</ViewAllButton>
            </FirstRow>
            {testData.slice(0,2).map((item, index) => {
                return <TransactionRowOverView key={item.id} last={index === 1} item={item}/>
            })}
        </Container>
    )
}

export default TransactionsOverView;