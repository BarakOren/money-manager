import React, {useState} from "react";
import styled, {keyframes} from "styled-components"
import { useNavigate } from "react-router";
import MiniSpinner from "../spinners/mini-spinner.tsx"

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
    height: 270px;
    align-items: center;
    background-color: #101113;
    padding: 50px;
    border-radius: 6px; 
    position: relative;
`

const Form = styled.form`
    width: 100%;
    height: 100%;
`


const Title = styled.h1`
    font-size: 30px;
    width: 100%;
    text-align: center;
    margin-top: 0;
`

const Label = styled.label`
    font-size: 15px;
    margin-bottom:3px;
    display:inline-block;
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

    &:focus{
        /* color: black; */
        outline: none;
        background: #F451E4;
        animation: ${glow} 5s linear infinite;
    }
 
`

const Button = styled.button`
    margin-top: 10px;
    width: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-45%);
    border-radius: 6px;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    transition: .2s all;
    color: white;
    background: #1e1f23;
    &:hover{
        box-shadow: 0 0 13px #F451E4;
        background: #F451E4;
    }
`

const Error = styled.p`
    color: rgb(232, 42, 42);
    width: 100%;
    text-align: center;
    font-size: 14px;
`

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function register(e) {
        setLoading(true)
		e.preventDefault()

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			return navigate('/login')
		} else {
            setError("Something went wrong.. ")
        }
	}

    return (
        <Container>
            <Box>
                {loading && <MiniSpinner />}
                {!loading &&
                <Form onSubmit={register}>
                <Title>Register</Title>
                <Label>Name</Label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                <Label>Email</Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <Label>Password</Label>
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <Button type="submit">submit</Button>
                </Form>
                }
                {error && <Error>{error}</Error>}
            </Box>
        </Container>
    )
}

export default Register


// <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     type="text"
//                     placeholder="Name"
//                 />
//                 <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     placeholder="Email"
//                 />
//                 <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Password"
//                 />