import React from 'react'

// MUI IMPORTS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

// CSS
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>

      <div className='about'>
        <h2> Hi! This is Chrollo. </h2>
        <div className='prompt'>
          <p>
            Soccer player with a passion in coding.
          </p>
          <a href='https://www.linkedin.com/in/roger-acevedo-9b57bb1aa/' target="_blank"> < LinkedInIcon /></a>
            <a href="https://github.com/RogerAcevedo" target="_blank">< GitHubIcon /></a>
            <a href="https://twitter.com/Rogerhxh" target="_blank"> < TwitterIcon /> </a>
            < EmailIcon />
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>

          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Bootstrap, MaterialUI, TailwindCSS

            </span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, MySQL, MongoDB, Express

            </span>
          </li>

          <li className='item'>
            <h2>Languages-End</h2>
            <span>
              JavaScript, Java, Python, TypeScript

            </span>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Home