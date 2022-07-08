import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {

return(
    <div className="NavBar">
        <NavLink to = "/Home">Home</NavLink>
        <NavLink to = "/Posts">Posts</NavLink>
        <NavLink to = "/Register">Register</NavLink>
        <NavLink to = "/Login">Login</NavLink>
        <NavLink to = "/Profile">Profile</NavLink>
    </div>
);    
} 

export default NavBar;