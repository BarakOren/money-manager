import React from "react";
import styled, {keyframes} from "styled-components";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    border: 5px solid #3CECEC;
  filter: drop-shadow(0 0 5px #3CECEC);
  
`
export const color = keyframes`
  0% {    border: 5px solid #F451E4;
    filter: drop-shadow(0 0 5px #F451E4);
    border-bottom-color: transparent;
  }
  100% {
  border: 5px solid #3CECEC;
  border-bottom-color: transparent;
  filter: drop-shadow(0 0 5px #3CECEC);
`

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const Span = styled.span`
  display: inline-block;
    width: 48px;
    height: 48px;
    border: 5px solid #F451E4;
    filter: drop-shadow(0 0 5px #F451E4);
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite, ${color} 1s linear infinite alternate;
`

const MiniSpinner = () => {
    return (
      <Div>
        <Span />
      </Div>
    )
}

export default MiniSpinner; 