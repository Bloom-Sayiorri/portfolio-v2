import React from 'react'
import '../styles/footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <section className='first-section'>
        <NavLink className='link'>Contact</NavLink>
        <NavLink className='link'>Email</NavLink>
      </section>
      <section className='second-section'>
        <NavLink className='link'>Home</NavLink>
        <NavLink className='link'>Skills</NavLink>
        <NavLink className='link'>About</NavLink>
      </section>
    </footer>
  )
}

export default Footer