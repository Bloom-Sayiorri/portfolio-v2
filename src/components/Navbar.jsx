import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'className='home_link'>Bloom Sayiorri</Link>
      <nav className='other_links'>
        <Link to='/' className='child_links'>Home</Link>
        <Link to='/skills' className='child_links'>Skills</Link>
        <Link to='/projects' className='child_links'>Projects</Link>
        <Link to='/about' className='child_links'>About</Link>
      </nav>
    </div>
  )
}

export default Navbar