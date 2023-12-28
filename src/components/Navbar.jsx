import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='home_header1'><Link to='/'className='home_link'>Bloom Sayiorri</Link></h1>
      <br/>
      <nav className='other_links'>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
      </nav>
    </div>
  )
}

export default Navbar