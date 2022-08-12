import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {keyframes} from "styled-components";

interface Props { 
    num: number;
    largest: number;
    name: string;
}

const BarStyle = styled.div`
    width: 30px;
    background: linear-gradient(180deg, #F451E4 0%, rgba(255, 132, 220) 100%);
    z-index: 1;
    border-radius: 6px 6px 0 0;
    box-shadow: 0px -5px 20px #7A3799;
    animation: ${p => p.animation} 2s normal forwards ease-in-out;
    animation-delay: 1s;
    position: relative;
`
const Title = styled.p`
    position: absolute;
    bottom: -20px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #d6d6d6;
    font-size: 0.8em;
`

const Number = styled.p`
    position: relative;
    bottom: 25px;
    margin: 0;
    color: white;
    left: ${p => p.left ? "50%" : "0"};
    transform: ${p => p.left ? "translateX(-70%)" : "0"};;
    text-shadow: 0 0 10px rgb(255,255,255,0.5);
`


const Bar: React.FC<Props> = ({num, largestSpent, name}) => {
    
    const animation = keyframes`
    from {height: 10px;}
    to {height: ${(100 * num) / largestSpent}%;}
    `;

    return <BarStyle animation={animation} num={(100 * num) / largestSpent}>
      <Title>{name}</Title>
      <Number left={num.toString().length >= 4}>{num}$</Number>
    </BarStyle>
}

export default Bar;