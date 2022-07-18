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


const Chart: React.FC<Props> = ({expensesData}) => {
    // expensesData 1500, 4600, 700
    // this section determs which numbers will apear by each line in the chart.
    const largest: number = expensesData.sort((a,b)=>a-b).reverse()[0];
    console.log(largest)
    const firstNumStr: string = largest.toString()[0]
    const firstNumNum: number = parseInt(firstNumStr) 
    const chartData: number[] = [firstNumNum, firstNumNum * 0.66, firstNumNum  * 0.33 , 0];

    return (
        <ChartBox>
             {chartData.map((num, index) => {
                return <Line key={index} number={num} 
                align={index} expensesData={expensesData}
                />
            })} 
        </ChartBox>
    )
}

export default Chart;