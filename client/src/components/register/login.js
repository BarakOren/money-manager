import React, {useState} from "react";
import styled, {keyframes} from "styled-components"
import { useNavigate } from "react-router-dom";
import MiniSpinner from "../spinners/mini-spinner.tsx";
import {useDispatch} from "react-redux"
import { setUser } from "../../redux/user/actions";

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
    font-size: 16px;
    color: rgb(201, 62, 62);
    width: 100%;
    text-align: center;
`

const Login = () => {

    const [email, setEmail] = useState("barakoren5@gmail.com")
    const [password, setPassword] = useState("bbbb2435")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    async function login(event) {
		event.preventDefault()
        setError(null)
        setLoading(true)
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
    
            const data = await response.json()
            if (data.user) {
                localStorage.setItem('token', data.user)
                dispatch(setUser(data.user))
                return navigate('/overview')
            } else {
                alert('Please check your username and password')
            }
        } catch (e) { 
            console.log(e)
            setLoading(false)
            setError("Sorry.. something went wrong.")
        }
 		
	}

    return (
        <Container>
            <Box>
                
                {loading && <MiniSpinner />}
                
                {!loading &&
                <Form onSubmit={login}>
                <Title>Login</Title>
        
                <Label>Email</Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <Label>Password</Label>
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <Button type="submit">submit</Button>
                {!loading && error && <Error>{error}</Error>}
                </Form>
                }
            </Box>
        </Container>
    )
}

export default Login