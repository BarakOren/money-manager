import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";


const HeaderContainer = styled.header`
    position: absolute;
    top: 2%;
    right: 0;
    padding: 0 2.5%;
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #ffffff;

`

const Location = styled.h1`
    font-size: 1.5em;
    margin-right: 5%;
`

const Welcome = styled.p`
    font-size: 1.3em;
`

const Header: React.FC = () => {
    const location = useLocation();
    const name: string = useSelector(state => state.userReducer.user.name) || ""

    return(
        <HeaderContainer>
            <Location>{location.pathname.substring(1, location.pathname.length).toUpperCase()}</Location>
            <Welcome>Welcome {name}</Welcome>
        </HeaderContainer>
    )
}

export default Header;