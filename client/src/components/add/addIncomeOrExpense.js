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
    margin-bottom:10px;
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


const AddIncomeOrExpense = () => {
    const [type, setType] = useState("Expense")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(50)

    const add = async (e) => {
        e.preventDefault();
        const uid = uuidv4();
		const response = await fetch('http://localhost:5000/api/addExpense', {
			method: 'POST',
            headers: {
				'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				uid, type, category, amount,   
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

    // const test = [
    //         {Rent: []},
	// 		{Groceries: []},
	// 		{Housekeeping: []}
    // ]

    const expensesTypes = ['Rent', 'Groceries', 'Housekeeping']
    const IncomeTypes = ['salary', 'wolt', 'husling']

    // const t = test.find(item => Object.keys(item)[0] === expensesTypes[0])
    // Object.values(t).forEach(item => console.log(item))

    const test2 = {
        Rent: [],
        g: [],
        b: []
    }

    const bla = test2['Rent']
    console.log(bla)

    return (
        <Container>
            <Box>
                <button onClick={() => clear()}>clear </button>
                <Title>Add Income\Expense</Title>
                <Form onSubmit={add}>
                    <Row>
                    <RadioLabel checked={type === "Expense" ? "checked" : ""} htmlFor="Expense">Expense</RadioLabel>
                    <RadioTypeButton
                    id="Expense" 
                    value={"Expense"}
                    checked={type === "Expense"}
                    type="radio"
                    onChange={(e) => setType(e.target.value)}
                    />

                    <RadioLabel checked={type === "Income" ? "checked" : ""} htmlFor="Income">Income</RadioLabel>
                    <RadioTypeButton
                    id="Income" 
                    value={"Income"}
                    type="radio"
                    checked={type === "Income"}
                    onChange={(e) => setType(e.target.value)}
                    />
                    </Row>
                    

                    <TypeContainer>
                        {type === "Expense" ?
                        expensesTypes.map(item => {
                            return <div key={item}>
                            <TypeButtonLabel htmlFor={item} checked={category === item ? "checked" : ""}>{item}</TypeButtonLabel>
                            <TypeButton 
                            id={item}
                            value={item}
                            checked={category === item}
                            type="radio"
                            onChange={(e) => setCategory(e.target.value)}
                            />
                            </div>
                        })
                        :
                        IncomeTypes.map(item => {
                            return <div key={item}>
                            <TypeButtonLabel htmlFor={item} checked={category === item ? "checked" : ""}>{item}</TypeButtonLabel>
                            <TypeButton 
                            id={item}
                            value={item}
                            checked={category === item}
                            type="radio"
                            onChange={(e) => setCategory(e.target.value)}
                            />
                            </div>
                        })
                        }
                    </TypeContainer>

            <Input 
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            />
            
            <AddButton type="submit">ADD</AddButton>
            </Form>
            {/* <AddButton onClick={() => clear()}>clear</AddButton> */}
            </Box>
        </Container>
       
    )
}

export default AddIncomeOrExpense;