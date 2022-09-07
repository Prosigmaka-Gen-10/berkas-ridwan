import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            Home
        </NavLink>
        <span> | </span>
        <NavLink to="absensi">
            Absensi
        </NavLink>
        <span> | </span>
        <NavLink to="product">
            Product
        </NavLink>
        <span> | </span>
        <NavLink to="members">
            Members
        </NavLink>
    </nav>
  )
}

export default Navbar