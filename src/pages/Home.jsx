import React from 'react';
import '../styles/home.css';
// import image from '../assets/'

function Home() {
  return (
    <div className='home'>
      <section className='details'>
        <h2 className='heading'>Software Developer</h2>
        <p>I'm a Software Engineer from Nairobi, Kenya passionate about coming up with solutions to everday problems in life.</p>
        <p>Having attended a bootcamp, I realized how much untapped potential there is in the tech industry.</p>
      </section>
      <section className='img_container'>
        <img className='image' src={''} alt='dev_image'/>
      </section>
    </div>
  )
}

export default Home