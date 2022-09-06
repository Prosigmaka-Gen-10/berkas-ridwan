import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                HOME
            </NavLink>
            <span> | </span>

            <NavLink to="">
                ABSENSI
            </NavLink>
            <span> | </span>

            <NavLink to="/">
                SEPATU
            </NavLink>
            <span> | </span>

            <NavLink to="/">
                PRODUK
            </NavLink>
            <span> | </span>

            <NavLink to="/">
                MEMBER
            </NavLink>
            <span> | </span>

        </nav>
    )
}

export default Navbar