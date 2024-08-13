import React from 'react';
import '../styles/home.css';
import image from '../assets/image.jpeg';

function Home() {
  return (
    <div className='home'>
      <section className='details'>
        <h1 className='heading'>Software Developer</h1>
        <p>After writing my first line of code which was <span className='code'><q>Hello, World!</q></span>, I was hooked. I started to enjoy coding and was keen to explore this new path having come from the field of Aeronautical Engineering.</p>
        <p>Since then I have developed an interest in creating websites to showcase my ideas and how I bring them to lfe.</p>
        {/* <p>I'm a Software Engineer from Nairobi, Kenya passionate about coming up with solutions to everday problems in life.</p>
        <p>Having attended a bootcamp, I realized how much untapped potential there is in the tech industry.</p> */}
      </section>
      <section className='img_container'>
        <img className='image' src={image} alt='dev_image'/>
      </section>
    </div>
  )
}

export default Home