import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function HomePage() {
    return (
    <div>
    <header>
        <Link to="/">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <a href="https://github.com/hayleypyle">GitHub</a>
        <a href="https://www.linkedin.com/in/hayley-pyle/">LinkedIn</a>
    </header>
    <div class="top-container"><h1>Hello, I'm Hayley Pyle, full-stack software developer.</h1></div>
    <div class="portfolio">
        <div class="title"><h3>Portfolio</h3></div>
        <div class="project">
            <h3>Company Website</h3>
            <a href="https://hayleypyle.github.io/cgcwebsite/">View Website</a>
            <a href="https://github.com/hayleypyle/cgcwebsite">Github Repo</a>
            <p>This is a website for Clinton Glass Company in Knoxville Tennessee.
                The website has a nav bar, is responsive for mobile users, 
                and contains many pages like galleries and a contact us form. </p>
        </div>
        <div class="project">
            <h3>Website with Search Engine</h3>
            <a href="https://hayleypyle.github.io/GIPHY-search/">View Website</a>
            <a href="https://github.com/hayleypyle/GIPHY-search">Github Repo</a>
            <p>This website can search for gifs using the GIPHY API, and displays 
                them in a grid for the user to view and choose from. </p>
        </div>
        <div class="project">
            <h3>To Do List with React and Redux</h3>
            <a href="https://hayleypyle.github.io/ToDo-Redux/#/todos">View Website</a>
            <a href="https://github.com/hayleypyle/GIPHY-search">Github Repo</a>
            <p>An app built with React and Redux that is a functional to do list. 
                Users can add tasks, delete tasks, check them as complete and filter tasks
                by their completion status. </p>
        </div>
        <div class="project">
            <h3>Stock Trading Portfolio with Python Django</h3>
            <a href="https://paper-trader-7i1n.onrender.com/">View Website</a>
            <a href="https://github.com/hayleypyle/Paper-Trader">Github Repo</a>
            <p>An app that displays current stock prices and graphs for 3 different companies. 
                The user's portfolio can simulate buying and selling stocks and saves the user's portfolio history.</p>

        </div>
        <div class="project">
            <h3>Forum website with user registration and login</h3>
            <a href="https://hayleypyle-scholarsync.netlify.app/">View Website</a>
            <a href="https://github.com/hayleypyle/ScholarSync">Github Repo</a>
            <p> A 3-tier architecture project that uses a database to store user login information,
                questions submitted on the forum and answers from users, an application layer implementing node.js and express, and a presentation layer using React.
                </p>

        </div>
    </div>
    {/* <div class="contact">
        <h1>Contact Me</h1>
        
        <form>
            <div class="input"><input type="text" placeholder="Name"></input></div>
            <div class="input"><input type="email" placeholder="Email"></input></div>
            <div class="message"><textarea placeholder="Message"></textarea></div>
            <button>Submit</button>
        </form>
    </div> */}
    </div>
  )
}
