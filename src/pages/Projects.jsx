import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/projects.css'

function Projects({projects}) {
  const displayedProject = projects.map((project) => {
    return (
      <li className='list'>
        <img src={project.imgUrl} alt="Project" className=''/>
        <h3 className='title'>{project.title}</h3>
        {project.stacks.map((stack) => {
          return (
            <p className='stack'>{stack}</p>
          )
        })}
        <NavLink to={project.demoUrl} className='btns'>Live Demo</NavLink>
        <NavLink to={project.githubUrl} className='btns'>Github Code</NavLink>
      </li> 
    )
  })
  return (
    <div className='container'>
      <ul className='wrapper'>
        {displayedProject}
      </ul>
    </div>
  )
}

export default Projects