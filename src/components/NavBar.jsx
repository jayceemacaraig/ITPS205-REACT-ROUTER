import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/LOGO.png'


const NavBar = () => {
  return (
    <nav>
    <NavLink to="/"><img src={logo} alt="LOGO"></img></NavLink>
    
    <div className="desktop">
      <NavLink className="link" to="/about">ABOUT</NavLink>
      <NavLink className="link" to="/skills">SKILLS</NavLink>
      <NavLink className="link" to="/experience">EXPERIENCE</NavLink>
      <NavLink className="link" to="/projects">PROJECT</NavLink>
      <NavLink className="link" to="/contact">CONTACT</NavLink>
    </div>

    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" alt="MENU" className="menu"></img>
</nav>
  )
}

export default NavBar
