import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                HOME
            </NavLink>
            <span> | </span>

            <NavLink to="absensi">
                ABSENSI
            </NavLink>
            <span> | </span>

            <NavLink to="sepatu">
                SEPATU
            </NavLink>
            <span> | </span>

            <NavLink to="produk">
                PRODUK
            </NavLink>
            <span> | </span>

            <NavLink to="member">
                MEMBER
            </NavLink>
            <span> | </span>

        </nav>
    )
}

export default Navbar