import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/projects.css'

function Projects({projects}) {
  const displayedProject = projects.map((project) => {
    return (
      <li className='list'>
        <img src={project.imgUrl} alt="Project" className='imgUrl'/>
        <div className='details'>
          <h3 className='title'>{project.title}</h3>
          {project.stacks.map((stack) => {
            return (
              <p className='stack'>{stack}</p>
            )
          })}
          <NavLink to={project.demoUrl} className='links'>Live Demo</NavLink>
          <NavLink to={project.githubUrl} className='links'>Github Code</NavLink>
        </div>
        
      </li> 
    )
  })
  return (
    <ul className='wrapper'>
      {displayedProject}
    </ul>
  )
}

export default Projects