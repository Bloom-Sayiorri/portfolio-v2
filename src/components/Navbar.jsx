import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'><Link to='/'className='home_link'>Bloom Sayiorri</Link>
      <nav className='other_links'>
        <Link to='/' className="home_link">Projects</Link>
        <Link to='/' className="home_link">About</Link>
      </nav>
    </div>
  )
}

export default Navbar