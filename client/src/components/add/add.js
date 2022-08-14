import React, {useState} from "react";

const Add = () => {
    const [expenseType, setExpenseType] = useState("food")
    const [amount, setAmount] = useState(50)

    const add = async (e) => {
        e.preventDefault();

		const response = await fetch('http://localhost:5000/api/addExpense', {
			method: 'POST',
            headers: {
				'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				expenseType, amount 
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
        <div style={{marginLeft: "300px"}}>
            <form  onSubmit={add}>
             <input 
            value={expenseType}
            type="text"
            onChange={(e) => setExpenseType(e.target.value)}
            />
            <input 
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">ADD</button>
            </form>
            <button onClick={() => clear()}>clear</button>
        </div>
       
    )
}

export default Add;