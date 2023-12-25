import React from 'react'

function Projects({projects}) {
  const displayedProject = projects.map((project) => {
    return (
      <div>
        <h3>{project.title}</h3>
        <h4>{project.stack}</h4>
        <Link to={project.url}>Live Demo</Link>
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