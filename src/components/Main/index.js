import React from 'react'

export default function index() {
    return (
        <main>
            <section id="sub-img">
                <h2 id="subtitle">
                    Welcome to my portfolio page! I'm learning how to code!
                </h2>
            </section>

            <section id="about" class="main-box">
                <h1 class="main-heading-style">
                    About Me
                </h1>
                <section class="content-box">
                    <p>
                        Hello! I am learning full-stack web development through the University of Washington in partnership with Trilogy Education Services.
                    </p>
                    <p>
                        Check out some of my recent projects below!
                    </p>
                </section>
            </section>

            <section id="work" class="main-box">
            <h1 class="main-heading-style">
                Work
            </h1>

            <section class="content-box">

                <section id="featured" class="project-card">
                    <a href="https://gushihiro.github.io/Project-Face-Space/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Gushihiro/Project-Face-Space/develop/assets/images/vedomy.PNG" alt="front page of Vědomý webapp"/></a>
                    <section class="title-card">
                        <h2 class="title-card-heading">
                            Featured: Vědomý
                        </h2>
                        <h3 class="title-card-lang">
                            HTML/CSS/JavaScript
                        </h3>
                        <h3 class="title-card-lang">
                            <a class="link-color" href="https://github.com/Gushihiro/Project-Face-Space" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                <section class="project-card">
                    <a href="https://pantrimonium.herokuapp.com/"><img src="https://raw.githubusercontent.com/comatosino/portfolio/main/Assets/images/pantrimonium-screenshot.jpg" alt="pantrimonium"/></a>

                    <section class="title-card">
                        <h2 class="title-card-heading">
                            Pantrimonium
                        </h2>
                        <h3 class="title-card-lang">
                            Express.js/Sequelize/Handlebars.js
                        </h3>
                        <h3 class="title-card-lang">
                            <a class="link-color" href="https://github.com/comatosino/Pantrimonium" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>

                <section class="project-card">
                    <a href="https://github.com/comatosino/e-commerce-back-end"><img src="https://raw.githubusercontent.com/comatosino/e-commerce-back-end/develop/assets/images/e-commerce-backend.gif" alt="e-commerce back-end"/></a>

                    <section class="title-card">
                        <h2 class="title-card-heading">
                            E-Commerce Back-End
                        </h2>
                        <h3 class="title-card-lang">
                            Express.js/Sequelize
                        </h3>
                        <h3 class="title-card-lang">
                            <a class="link-color" href="https://github.com/comatosino/e-commerce-back-end" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </section>
                </section>
            </section>
        </section>


















        </main>
    )
}
