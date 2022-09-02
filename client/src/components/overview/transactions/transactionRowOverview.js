import React from "react";
import styled from "styled-components";
import sendicon from "../../../assets/sendicon.svg";
import reciveicon from "../../../assets/mail.svg"
const Row = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    border-bottom: ${p => p.last ? "" : "2px solid #191a1e"} ;
`

const TransactionTypeContainer = styled.div`
    width: 22%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 20px;
`

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    background: ${p => p.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SendIcon = styled.img`
    width: 15px;
    height: auto;
`

const RecivedIcon = styled.img`
    width: 15px;
    height: 15px;
`

const WhiteText = styled.p`
    color: white;
    margin: 0;
    width: 20%;
    text-align: left;
 
`

const To = styled.p`
    width: 10%;color: white;
    text-align: left;
`

const Date = styled.p`
    color: #4a4b4f;
    margin: 0;   width: 20%;
    text-align: left;
`

export const TransactionRowOverView = ({item, last}) => {

    const {type, date, to, amount} = item
    return (
        <Row last={last}>
            <TransactionTypeContainer>
            {type === "recived" && <IconContainer color={'#F451E4'}><SendIcon src={reciveicon}/></IconContainer>}
            {type === "sent" && <IconContainer color={'#3CECEC'}><RecivedIcon src={sendicon}/></IconContainer>}
            
            {type === "recived" && <WhiteText>Recived</WhiteText>}
            {type === "sent" && <WhiteText>Sent</WhiteText>}
            </TransactionTypeContainer>
   

            <Date>{date}</Date>
            <To>{to}</To>
            <WhiteText>$ {amount}</WhiteText>
        </Row>
    )

}

export default TransactionRowOverView