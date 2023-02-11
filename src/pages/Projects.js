import React from 'react'
import ProjectItem from './ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import { useNavigate } from 'react-router-dom'
import '../styles/Project.css'

function Projects() {


  return (
    <div className='projects'>
        <h1> My Project List</h1>
        <div className='projectList' >
           {ProjectList.map((project, idIndex) => {
            return <ProjectItem id={idIndex} name={project.name} image={project.image}/>
                        })
                    }
        </div>

    </div>
  )
}

export default Projects
