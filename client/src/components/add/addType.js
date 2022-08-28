import React, {useState, useRef} from "react";
import styled, {keyframes, css} from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 2%;
`

const AddTypeInput = styled.input`
    outline: none;
    border: none;
    padding: 3px 7px;
    width: ${p => p.toggle ? "70%" : "0px"};
    opacity: ${p => p.toggle ? "1" : "0"};
    margin: 0;
    font-size: 16px;
    color: white;
    border-radius: 6px;
    background-color: #F451E4;
    transition: .5s all;

    &:hover {
        cursor: pointer;
    }

`

const successAnimation = keyframes`
    0% {
        background-color: #66ff66 ;
    }
    100% {
        background-color: #F451E4;
    }
`

const errorAnimtion = keyframes`
    0% {
        background-color: red ;
    }
    100% {
        background-color: #F451E4;
    }
`

const AddTypeButton = styled.button`
    border-radius: 6px;
    border: none;
    font-size: 16px;
    padding: 3px 0;
    width: 19%;
    height: 100%;
    background-color: #F451E4;
    color: white;
    z-index: 1;
    animation: ${p => p.status === "success" && css`
        ${successAnimation} 3s ease-out;
    `};  
    animation: ${p => p.status === "error" && css`
        ${errorAnimtion} 3s ease-out;
    `};  


    &:hover{
        cursor: pointer;
    }

`

const X = styled.label`
    color: white;
    font-weight: 700;
    display: ${p => p.toggle ? "block" : "none"};
    transition: .2s all;
    &:hover{
        cursor: pointer;
    }
`


const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const Spinner = styled.span`
    width: 13px;
    height: 13px;
    position: relative;
    top: 1px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${spin} 1s linear infinite;
`

const AddTypeElement = () => {
    const [toggle, setToggle] = useState(false)
    const [addType, setAddType] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null) //success or error 

    const inputRef = useRef(null);
   
    const toggleInput = (e) => {
        e.preventDefault();
        if(!toggle){setToggle(!toggle); inputRef.current.focus()}
        else{setToggle(!toggle); inputRef.current.blur()}
    }

    const closeAddSection = () => {
        setAddType("")
        setToggle(false)
    }

    const addTypeFunction = (e) => {
        e.preventDefault();
        console.log("basdk")
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setToggle(false)
            setStatus("success")
            setTimeout(() => {
                setStatus(null)
            }, 4000)
        }, 1000)
    }

    return(
        <Container>
            
            <AddTypeButton status={status}
                onClick={(e) => !toggle ? toggleInput(e) : addTypeFunction(e)}
            >{loading && <Spinner />}
            {!loading && toggle && "+"}
            {!status && !toggle && "ADD"}
            {!loading && status === "success" && "DONE"}
            {!loading && status === "error" && "X"}
            </AddTypeButton>

            <AddTypeInput ref={inputRef} type="text"
                toggle={toggle}
                onChange={(e) => e.setAddType(e.target.value)}
            ></AddTypeInput>
            
            <X onClick={() => closeAddSection()} toggle={toggle}>X</X>
            
        </Container>
    )
}

export default AddTypeElement