import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavStyle = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    height: 30vh;
    padding: 5vh 0 65vh 0;
    background-color: #1e1f23;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Item = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

const Nav: React.FC = () => {

    return(
        <NavStyle>
            <Item to="/add">Add</Item>
            <Item to="/overview">OverView</Item>
            <Item to="/login">login</Item>
            <Item to="/register">register</Item>
            <Item to="/">OverView</Item>

        </NavStyle>
    )
}

export default Nav;