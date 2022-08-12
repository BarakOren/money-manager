import React from "react";
import styled from "styled-components";

interface Props { 
    number: number;
    align: number;
    expensesData: number[];
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: ${p => p.align === 3 ? "flex-end" : "center"};
`

const Number = styled.p`
    margin: 0;
    font-weight: 100;
    color: #494949;
`

const LineStyles = styled.div`
    width: 100%;
    height: 1px;
    background-color: #494949;
`


const Line: React.FC<Props> = ({number, align}) => {
    return <Container align={align}>
        {/* <Number>{number}k</Number> */}
        <LineStyles />
    </Container>
}

export default Line;