import React from 'react'

// MUI IMPORTS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

// CSS
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/roger-acevedo-9b57bb1aa/' target="_blank"> < LinkedInIcon /></a>
            <a href="https://github.com/RogerAcevedo" target="_blank">< GitHubIcon /></a>
            <a href="https://twitter.com/Rogerhxh" target="_blank"> < TwitterIcon /> </a>
            < EmailIcon />
        </div>
        <p> &copy; 2023 Rogerhxh</p>

    </div>
  )
}

export default Footer