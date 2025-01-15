import React from 'react'

function Skills({skills}) {
  const card = () => {
    skills.map((skill) => {
      return (
        <section>
        {/* <h4>{title}</h4>
        <p>{language}</p>
        <img src={''} alt=''/> */}
      </section>
      )
    })
  }

  return (
    <div className='skill'>
      <h3>Skills</h3>
      <p>Javascript</p>
      <p>Python</p>
      <p>Ruby</p>
      <p>HTML5</p>
      <p>CSS3</p>
      <p>React</p>
      <p>Ruby on Rails</p>
      <p>Nextjs</p>
      {skills}
    </div>
  )
}

export default Skills