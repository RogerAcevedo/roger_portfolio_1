import React from 'react'
import { useParams } from "react-router-dom";

// IMPORT HELPERS
import { ProjectList } from '../helpers/ProjectList';

// MUI ICONS
import GitHubIcon from '@mui/icons-material/GitHub';

// IMPORT CSS
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    // use our ProjectList as "project" to acces per id
    const project = ProjectList[id];

  return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img src={project.image} />
        <a href="https://github.com/RogerAcevedo" target="_blank">< GitHubIcon /></a>
        <p>
            <b> Skills: </b>{project.skills}
        </p>

    </div>
  )
}

export default ProjectDisplay