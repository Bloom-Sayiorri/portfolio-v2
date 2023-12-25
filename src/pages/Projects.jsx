import React from 'react'
import { NavLink } from 'react-router-dom'

function Projects({projects}) {
  const displayedProject = projects.map((project) => {
    return (
      <div>
        <h3>{project.title}</h3>
        <h4>{project.stack}</h4>
        <NavLink to={project.demoUrl}>Live Demo</NavLink>
        <NavLink to={project.githubUrl}>Github Code</NavLink>
      </div> 
    )
  })
  return (
    <div>
      {displayedProject}
    </div>
  )
}

export default Projects