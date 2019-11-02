import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <NavLink className="home">Home</NavLink>
            <NavLink className="characters">Characters</NavLink>
        </div>
    )
}