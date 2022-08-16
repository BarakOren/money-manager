import styled, { createGlobalStyle } from 'styled-components';
import OverView from './components/overview/overview.tsx';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import React, {useState, useEffect} from "react";
import Register from './components/register/resgister';
import Login from "./components/register/login"
import AddIncomeOrExpense from './components/add/addIncomeOrExpense';
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { setUser } from './redux/user/actions';
import { useSelector, useDispatch } from 'react-redux'
import Spinner from "./components/spinners/spinner.tsx"
import AddSavingPlan from "./components/add/addSaving";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #161719;
    /* background:  #262626; */
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;

    input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
  }
`;

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
`

const Error = styled.p`
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
`

function App() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const currentUser = useSelector(state => state.userReducer.user)

    async function populateQuote() {
      try{ 
        const req = await fetch('http://localhost:5000/api/quote', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
                    
          },
        })
    
        const data = await req.json()
        if (data.status === 'ok') {
          dispatch(setUser(data.quote))
            setLoading(false)
            return navigate("/overview")
        } else {
          return navigate("/login")
        }
      } catch (e) { 
        console.log(e)
        setError("Something went wrong.")
        setLoading(false)
      }
		
	  }
      
      useEffect(() => {
          const token = localStorage.getItem('token')
          setError(null)
          if(token){
              const user = decodeToken(token)
              if(!user){
                  localStorage.removeItem('token')
                  return navigate("/login");
              } else {
                 populateQuote()
              }
          }
      }, [])
   
  return (
    <Container>
     <GlobalStyle />
     {loading && <Spinner />}
     {error && !loading && <Error>Sorry... something Went Wrong</Error>}
      <Routes>
        <Route path="/overview" element={<OverView loading={loading} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddIncomeOrExpense />} />
        <Route path="/add-saving-plan" element={<AddSavingPlan />} />
      </Routes>
    </Container>
  );
}

export default App;
