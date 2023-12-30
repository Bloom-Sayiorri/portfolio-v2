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
      {skills}
    </div>
  )
}

export default Skills