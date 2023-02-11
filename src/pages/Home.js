import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from 'react-router-dom'

import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Projects from "./Projects"
import ProjectDisplay from "./ProjectDisplay"
import ProjectItem from "./ProjectItem"
import Experience from "./Experience"
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h1>Hi, I am Nayan</h1>
            <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
                <Link onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&to=yadavnayan441@gmail.com&tf=cm')} >
                <EmailIcon />
                </Link>
                <Link onClick={() => window.open('https://www.linkedin.com/in/yadavnayan441')} >
                <LinkedInIcon />
                </Link>
                <Link onClick={() => window.open('https://github.com/nayan441')} >
                <GithubIcon/>
                </Link>
        </div>
        </div>
        <div className='skills'>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS,  HTML, CSS, BootStrap            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS,  GraphQL, Postgres, Docker
              MySQL, MongoDB,  AWS S3, Git, Gitlab, Linux Administration
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>

        </div>
        <Projects></Projects>
        <Experience></Experience>
    </div>
    
  )
}

export default Home