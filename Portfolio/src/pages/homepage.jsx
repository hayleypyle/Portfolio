import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import websiteImage from '../img/websiteImage.jpg'
import gifFinderImage from '../img/gifFinderImage.jpg'
import todoImage from '../img/todoImage.jpg'
import paperTraderImage from '../img/paperTraderImage.jpg'
import scholarSyncImage from '../img/scholarSyncImage.jpg'

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
        <div class="title"><h2>my portfolio</h2></div>
        <div class="project">
            <h3>Company Website</h3>
            <h5>September 2023</h5>
            
            <a href="https://hayleypyle.github.io/cgcwebsite/">
            <img src={websiteImage}></img></a>

            <div className="links">
            <a href="https://hayleypyle.github.io/cgcwebsite/">View Website</a>
            <a href="https://github.com/hayleypyle/cgcwebsite">Github Repo</a>
            </div>
            <p>This is a website for Clinton Glass Company in Knoxville Tennessee.
                The website has a nav bar, is responsive for mobile users, 
                and contains many pages like galleries and a contact us form. </p>
            
        </div>
        <div class="project">
            <h3>Website with Search Engine</h3>
            <h5>November 2023</h5>

            <a href="https://hayleypyle.github.io/GIPHY-search/">
            <img src={gifFinderImage}></img></a>


            <div className="links">
            <a href="https://hayleypyle.github.io/GIPHY-search/">View Website</a>
            <a href="https://github.com/hayleypyle/GIPHY-search">Github Repo</a>
            </div>
            <p>This website can search for gifs using the GIPHY API, and displays 
                them in a grid for the user to view and choose from. </p>
        </div>
        <div class="project">
            <h3>To Do List with React and Redux</h3>
            <h5>January 2024</h5>

            <a href="https://hayleypyle.github.io/ToDo-Redux/#/todos">
            <img src={todoImage}></img>
            </a>


            <div className="links">
            <a href="https://hayleypyle.github.io/ToDo-Redux/#/todos">View Website</a>
            <a href="https://github.com/hayleypyle/ToDo-Redux">Github Repo</a>
            </div>
            <p>An app built with React and Redux that is a functional to do list. 
                Users can add tasks, delete tasks, check them as complete and filter tasks
                by their completion status. </p>
        </div>
        <div class="project">
            <h3>Stock Trading Portfolio with Python Django</h3>
            <h5>March 2024</h5>
            <a href="https://paper-trader-7i1n.onrender.com/">
            <img src={paperTraderImage}></img></a>

            <div className="links">
            <a href="https://paper-trader-7i1n.onrender.com/">View Website</a>
            <a href="https://github.com/hayleypyle/Paper-Trader">Github Repo</a>
            </div>
            <p>An app that displays current stock prices and graphs for 3 different companies. 
                The user's portfolio can simulate buying and selling stocks and saves the user's portfolio history.</p>

        </div>
        <div class="project">
            <h3>Forum website with user registration and login</h3>
            <h5>April 2024</h5>
            <a href="https://hayleypyle-scholarsync.netlify.app/">
            <img src={scholarSyncImage}></img></a>

            <div className="links">
            <a href="https://hayleypyle-scholarsync.netlify.app/">View Website</a>
            <a href="https://github.com/hayleypyle/ScholarSync">Github Repo</a>
            </div>
            <div className="description">
            <p> A 3-tier architecture project that uses a database to store user login information,
                questions submitted on the forum and answers from users, an application layer implementing node.js and express, and a presentation layer using React.</p></div>
                <div className="demo"><p>Create an account and login, or use the demo user:</p>
                <p>username: demo-user</p> <p>password:DEMO@user01</p></div>
                
                

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
