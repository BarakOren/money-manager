import React from "react";
import styled, {keyframes} from "styled-components"

const animation = keyframes`
    0% {
        background-color: #3CECEC;
        filter: drop-shadow(0 0 10px #3CECEC);
    }

    50% {
        background-color: #F451E4;
        filter: drop-shadow(0 0 10px #F451E4);
    }
    100% {
        background-color: #3CECEC;
        filter: drop-shadow(0 0 10px #3CECEC);
    }
`;

const Button = styled.button`
    width: 3vw;
    height: 3vw;
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-size: 2vw;
    animation: ${animation} 5s linear infinite alternate;
    color: white;
    transition: .1s all;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const AddButton = () => {

    return ( <Button>+</Button> )
}

export default AddButton