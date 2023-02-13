import React from 'react'

//IMPORT COMPONENTS 
import ProjectItem from '../components/ProjectItem'

// IMPORT CSS  - HELPS DISPLAY IMAGES
import "../styles/Projects.css"

// IMPORT FROM HELPERS - DISPLAY EACH INDIVIDUAL "ProjectItem"
import { ProjectList} from "../helpers/ProjectList"


function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>

      <div className='projectList'>
        {/* MAP THROUGH EVERY ITEM IN PROJECTLIST.JSX TO DISPLAY EACH INDIVIDUAL ITEM */}
        {ProjectList.map( (project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />;
        })}
      </div>



    </div>
  )
}

export default Projects