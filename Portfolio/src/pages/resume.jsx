import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../img/Hayley_Pyle_Resume.pdf'
import './styles.css'

export default function Resume() {
    return (
        <>
        <div>
        <header>
        <Link to="/">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <a href="https://github.com/hayleypyle">GitHub</a>
        <a href="https://www.linkedin.com/in/hayley-pyle/">LinkedIn</a>
        </header>
        </div>
        <div className="resume">
            <h2>Resume</h2>
        <iFrame src={resume}></iFrame>
        </div>
  
    
        </>
    
    )
    }
