import React from "react";
import styled from "styled-components";
import Line from "./line.tsx";


interface Props {
    expensesData: number[];
}

const ChartBox = styled.div`
    position: absolute;
    bottom: 40px;
    width: 90%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


const Chart: React.FC<Props> = ({ largestSpent, spendings }) => {
    // expensesData 1500, 4600, 700
    // this section determs which numbers will apear by each line in the chart.
    const firstNumStr: string = largestSpent.toString()[0]
    const firstNumNum: number = parseInt(firstNumStr) 
    const chartData: number[] = [firstNumNum, firstNumNum * 0.66, firstNumNum  * 0.33 , 0];
    return (
        <ChartBox>
             {chartData.map((num, index) => {
                return <Line key={index} number={num} 
                align={index} expensesData={spendings}
                />
            })} 
        </ChartBox>
    )
}

export default Chart;