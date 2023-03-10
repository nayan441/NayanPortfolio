import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    console.log(project);
   return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img  src={project.image}/>
        <p>{project.skills}</p>
        <GithubIcon></GithubIcon>
    </div>
  )
}

export default ProjectDisplay