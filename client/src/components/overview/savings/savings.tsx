import React from "react";
import styled from "styled-components";
import SavingsBar from "./savingsbar.tsx";
import {user} from "../fakeData.js";

const Container = styled.section`
    width: 100%;
    /* height: 100px; */
    padding: 50px 20px 10px 20px;
    background-color: #101113;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Name = styled.p`
    position: absolute;
    top: 20px;
    left: 5%;
    font-size: 1em;
    color: white;
    margin: 0;
`

const SavingContainer = styled.div`
    width: 80%;
    height: 60px;
    background-color: #191a1e;
    border-radius: 6px;
    padding: 10px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const SavingName = styled.p`
    color: white;
    font-size: 1em;
    margin: 0;
`

const Target = styled.p`
    margin: 0;
    font-size: 1.2em;
    text-shadow: 0 0 10px rgb(255,255,255, 0.5);
    color: white;
`

const Savings: React.FC = () => {

    interface Dummie {
        name: string;
        target: number;
        current: number;
    }

    const dummieData: Dummie = {
        name: "Investment",
        target: 2500,
        current: 1500
    }
    // precent: (100 * num) / largest
    
    return (
       <Container>
           <Name>My Savings</Name>
           {user.savings.map((saving, index) => {
                   return <SavingContainer key={index}>
                   <Details>
                   <SavingName>{saving.name}</SavingName>
                    <Target>{saving.target}$</Target>
                   </Details>
                    <SavingsBar saving={saving} />
               </SavingContainer>
            })}
       </Container>
    )
}

export default Savings;