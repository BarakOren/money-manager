import React, {useState} from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    width: 85vw;
    height: 100vh;
    padding-left: 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Box = styled.div`
    width: 30%;
    /* height: 200px; */
    align-items: center;
    background-color: #101113;
    padding: 50px;
    border-radius: 6px;

`


const RadioTypeButton = styled.input`
      -webkit-appearance: none;
        appearance: none;
        display: none;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const RadioLabel = styled.label`
    width: 40%;
    padding: 5px 0;
    border-radius: 6px;
    text-align: center;
    display: inline-block;
    background-color: ${p => p.checked === "checked" ? "#F451E4" : "#1e1f23" };
    /* #3CECEC #F451E4 */
    &:hover {
        cursor: pointer;
    }
`

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    gap: 20px 0;
`

const Title = styled.h1`
    font-size: 30px;
    width: 100%;
    text-align: center;
    margin-top: 0;
`

const glow = keyframes`
    0% {
        box-shadow: 0 0 3px #F451E4;
    }
    50% {
        box-shadow: 0 0 13px #F451E4;
    }
    100% {
        box-shadow: 0 0 3px #F451E4;
    }
`

const Input = styled.input`
    width: 95%;
    padding: 5px 10px;
    border: none;
    border-radius: 6px;
    background: #1e1f23;
    color: white;
    transition: .2s all;

    &::placeholder {
    color: white;
    }   

    &:focus{
        outline: none;
        background: #F451E4;
        animation: ${glow} 5s linear infinite;
    }
 
`

const TypeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px 5px;
`

const TypeButton = styled.input`
   -webkit-appearance: none;
        appearance: none;
        display: none;
`

const TypeButtonLabel = styled.label`
    padding: 3px 7px;
    font-size: 16px;
    color: white;
    border-radius: 6px;
    background-color: ${p => p.checked === "checked" ? "#F451E4" : "#1e1f23" };
    &:hover {
        cursor: pointer;
    }
`

const AddButton = styled.button`
    width: 50%;
    border-radius: 6px;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    transition: .2s all;
    color: white;
    background: #F451E4;
    &:hover{
        box-shadow: 0 0 13px #F451E4;
    }
`


const AddSavingPlan = () => {
    const [name, setName] = useState("")
    const [currentAmount, setCurrentAmount] = useState(0)
    const [TargetAmount, setTargetAmount] = useState(0)


    const add = async (e) => {
        e.preventDefault();
        const uid = uuidv4();
		const response = await fetch('http://localhost:5000/api/add-saving-plan', {
			method: 'POST',
            headers: {
				'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				uid, name, currentAmount, TargetAmount 
			}),
		})
		const data = await response.json()
        console.log(data)
    }

    const clear = async () => {
        const response = await fetch('http://localhost:5000/api/clearExpenses', {
			method: 'POST',
            headers: {
				'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
			},
			
		})
		const data = await response.json()
        console.log(data)
    }


    return (
        <Container>
            <Box>
                <button onClick={() => clear()}>clear </button>
                <Title>Add Saving Plan</Title>
                <Form  onSubmit={add}>
                <Input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                />

                <Input 
                type="number"
                onChange={(e) => setCurrentAmount(e.target.value)}
                placeholder="Current Amount Saved"
                />

                <Input 
                type="number"
                onChange={(e) => setTargetAmount(e.target.value)}
                placeholder="Target Amount"
                />  

            <AddButton type="submit">ADD</AddButton>
            </Form>
            {/* <AddButton onClick={() => clear()}>clear</AddButton> */}
            </Box>
        </Container>
       
    )
}

export default AddSavingPlan;