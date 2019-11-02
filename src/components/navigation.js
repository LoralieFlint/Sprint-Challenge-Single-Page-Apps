import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <NavLink className="home" to="/">Home</NavLink>
            <NavLink className="characters" to="/characters">Characters</NavLink>
        </div>
    )
}


