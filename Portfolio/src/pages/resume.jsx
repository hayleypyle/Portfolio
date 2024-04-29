import React from 'react'
import { Link } from 'react-router-dom'
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
        <h1>Resume</h1>
        </>
    
    )
    }
