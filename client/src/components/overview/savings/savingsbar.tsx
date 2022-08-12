import React from "react";
import styled, {keyframes} from "styled-components";

const Container = styled.div`
    width: 70%;
    height: 8px;
    border-radius: 6px;
    background-color: #101113;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 5%;
`

const Fill = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 6px;
    background: linear-gradient(90deg, #3CECEC 0%, rgb(194, 253, 228) 100%);
    box-shadow: 0px 0px 10px #6dc9a7be;   
    animation: ${p => p.animation} 2s normal forwards ease-in-out;
    animation-delay: 1s;
`


const Precent = styled.p`
    color: #d6d6d6;
    font-size: 0.9em;
    margin: 0;
    position: absolute;
    bottom: 15px;
`

const Amout = styled.p`
    color: white;
    font-weight: 600;
    text-shadow: 0 0 10px rgb(255,255,255, 0.5);
    margin: 0;
    font-size: 1em;
    position: absolute;
    right: -50px;
`

interface Props {
    // dummieData: [] 
}

const SavingsBar: React.FC<Props> = ({saving}) => {
    const {target, current} = saving

    const animation = keyframes`
    from {width: 0px;}
    to {width: ${(100 * current) / target}%;}
    `;

    return (
       <Container  >
          <Fill animation={animation} />
            <Precent>{(100 * current) / target}%</Precent>
            <Amout>{current}$</Amout>
       </Container>
    )
}

export default SavingsBar;