import React from 'react'

// TODO: Refactor these sections into components
// This component should be a class that stores the info of each project
// pass that info into the cards as props
export default function index() {
    return (
        <main>
            <section id="sub-img">
                <h2 id="subtitle">
                    Welcome to my portfolio page! I'm learning how to code!
                </h2>
            </section>

            {/* make a main-box component */}
            <section id="about" className="main-box">

                {/* make this a component */}
                <h1 className="main-heading-style">
                    About Me
                </h1>
                
                <section className="content-box">
                    <p>
                        Hello! I am learning full-stack web development through the University of Washington in partnership with Trilogy Education Services. I couldn't be more excited to see what's next as I learn programming!
                    </p>
                    <p>
                        Check out some of my recent projects below!
                    </p>
                </section>
            </section>

            {/* make a main-box component */}
            <section id="work" className="main-box">

            {/* make this a component */}
            <h1 className="main-heading-style">
                Work
            </h1>

            {/* make a content box component for the project cards */}
            <section className="content-box">

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://gushihiro.github.io/Vedomy/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Gushihiro/Project-Face-Space/develop/assets/images/vedomy.PNG" alt="front page of Vědomý webapp"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            Vědomý
                        </h2>
                        <h3 className="title-card-lang">
                            HTML/CSS/JavaScript
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/Gushihiro/Project-Face-Space" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://pantrimonium.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/comatosino/portfolio/main/Assets/images/pantrimonium-screenshot.jpg" alt="pantrimonium"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            Pantrimonium
                        </h2>
                        <h3 className="title-card-lang">
                            Express.js/Sequelize/Handlebars.js
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/comatosino/Pantrimonium" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://github.com/comatosino/e-commerce-back-end" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/comatosino/e-commerce-back-end/develop/assets/images/e-commerce-backend.gif" alt="e-commerce back-end"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            E-Commerce Back-End
                        </h2>
                        <h3 className="title-card-lang">
                            Express.js/Sequelize
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/comatosino/e-commerce-back-end" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://github.com/comatosino/employee-tracker" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/comatosino/employee-tracker/develop/assets/employee-tracker.gif" alt="e-commerce back-end"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            Employee Tracker
                        </h2>
                        <h3 className="title-card-lang">
                            Node/MySQL/Inquirer
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/comatosino/employee-tracker" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://robs-employee-directory.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/comatosino/employee-directory/develop/emp-dir.gif" alt="e-commerce back-end"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            Employee Directory
                        </h2>
                        <h3 className="title-card-lang">
                            React
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/comatosino/team-profile-generator" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                {/* Factor out a project card */}
                <section className="project-card">
                    <a href="https://comatosino.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/comatosino/weather-dashboard/develop/assets/demo-gif.gif" alt="e-commerce back-end"/></a>
                    <section className="title-card">
                        <h2 className="title-card-heading">
                            Weather Dashboard
                        </h2>
                        <h3 className="title-card-lang">
                            HTML/CSS/JavaScript
                        </h3>
                        <h3 className="title-card-lang">
                            <a className="link-color" href="https://github.com/comatosino/weather-dashboard/" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

            </section>

        </section>
    </main>
    )
}
