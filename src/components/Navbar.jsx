import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Login from './Login';



const Navbar = () => {

    const [show, setShow] = useState(false);

    const NavWrapper = styled.div`
        position: relative;
        z-index: 100;

        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1em 1.5em;
            display: flex;
            align-items: center;
            background-color: #97a97c;
            justify-content: space-between;
        }
    `

    const SecondaryBtn = styled.button`
        padding: 1em;
        border: solid black 1px;
        background-color: transparent;
        border-radius: .3em;
        cursor: pointer;
    `

    return (
        <>
            <NavWrapper>
                <nav>
                    <h1>Explorer Hub</h1>
                    <NavLink to={"/newlocation"}>New Location</NavLink>
                    <SecondaryBtn type="button" onClick={() => setShow(true)}>Login</SecondaryBtn>
                </nav>    
            </NavWrapper>
            <Login onClose={() => setShow(false)} show={show}/>
        </>
        
        
    )
}

export default Navbar