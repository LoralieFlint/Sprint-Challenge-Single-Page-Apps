import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.div `
text-align: center;

`;
export default function Navigation() {
    return (
        <Nav className="nav">
            <NavLink className="home" to="/">Home</NavLink>
            <NavLink className="characters" to="/characters">Characters</NavLink>
        </Nav>
    )
}


