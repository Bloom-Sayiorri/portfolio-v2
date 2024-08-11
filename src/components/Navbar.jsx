import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/'className='home_link'>Bloom Sayiorri</NavLink>
      <nav className='other_links'>
        <NavLink to='/' className='child_links'>Home</NavLink>
        <NavLink to='/skills' className='child_links'>Skills</NavLink>
        <NavLink to='/projects' className='child_links'>Projects</NavLink>
        <NavLink to='/about' className='child_links'>About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar