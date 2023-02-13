import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";

// MATERIAL UI IMPORTS
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// IMPORT CSS
import "../styles/Experience.css"



function Experience() {
  return (
    <div className='experience'>
      
      <VerticalTimeline lineColor="black">

      <VerticalTimelineElement 
      className='vertical-timeline-element--education'
      date="2007- 2011"
      iconStyle={{ background: "gold", color: "black"}}
      icon={ <SchoolIcon /> }
      >
      <h3 className='vertical-timeline-element-title'> Sylmar High School</h3>
      <p> High School Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
      className='vertical-timeline-element--education'
      date="2007- 2011"
      iconStyle={{ background: "gold", color: "black"}}
      icon={ <SchoolIcon /> }
      >
      <h3 className='vertical-timeline-element-title'> Sylmar High School</h3>
      <p> High School Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
      className='vertical-timeline-element--education'
      date="2015 - 2022"
      iconStyle={{ background: "black", color: "gold"}}
      icon={ <WorkIcon /> }
      >
      <h3 className='vertical-timeline-element-title'> Kitchen Pro Cabinetry</h3>
      <p> Project Manager</p>
      </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience

