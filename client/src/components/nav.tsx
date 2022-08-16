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
    justify-content: flex-start;
    gap: 30px 0;
`

const Item = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    transition: .2s all;

    &:hover{
        text-shadow: 0 0 3px white;
    }
`

const Nav: React.FC = () => {

    const currenctUser = useSelector(state => state.userReducer.user)

    return(
        <NavStyle>
            {currenctUser ? 
                <>
                <Item to="/overview">OverView</Item>
                <Item to="/add">Add Income\Expense</Item>
                <Item to="/add-saving-plan">Add Saving Plan</Item>
                </>
                :
                <>
                <Item to="/login">login</Item>
                <Item to="/register">register</Item>
                </>
            }
        </NavStyle>
    )
}

export default Nav;