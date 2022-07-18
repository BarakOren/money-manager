import React from "react";
import styled from "styled-components";
import Chart from "./chart.tsx"
import Bar from "./bar.tsx";

const Container = styled.section`
    width: 100%;
    height: 150px;
    padding: 40px 20px 10px 20px;
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

const BarsContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    position: relative;
    top: 5px;
`

const ExpensesByType: React.FC = () => {
// food, rent, loan, transportation, household, Apparel, Other,groceries, luxury
// entertaiment   


interface expensesArr {
    [index: string]: number;
}

const expensesDataObj: expensesArr = {
        groceries: 1500,
        transportation: 300,
        Apparel: 500,
        rent: 2000
    }

  

    // turning data object to an array filled with objects.
    const expensesArray: expensesArr[] = Object.keys(expensesDataObj).map((key) => {
        return { [key]: expensesDataObj[key] };
    });

    // to get a realistic size of the chart and bars, im taking the largest
    // expense.
    const largest: number = Object.values(expensesDataObj).sort((a,b)=>a-b).reverse()[0];
    
    return (
        <Container>
            <Name>Expenses</Name>
            <BarsContainer>
            {expensesArray.map((obj, index) => {
                const num: number = Object.values(obj)
                const name: string = Object.keys(obj)[0]
                return <Bar key={index * num / 3.5} name={name} num={num} largest={largest}/>
            })}
            </BarsContainer>
            
            <Chart expensesData={expensesArray}/>
        </Container>
    )
}

export default ExpensesByType;