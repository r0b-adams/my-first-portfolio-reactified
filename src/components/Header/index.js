import React from 'react';
import resume from './Adams_Robert_Resume.pdf'; // tells webpack to use this file

export default function Header() {

    return (
            <header className="header-footer-style">
                <h1 id="my-name" className="main-heading-style">
                    Robert Adams
                </h1>

                <nav>
                    <ul class="nav-ul-style">
                        <li>
                            <a class="link-color" href="#about">About Me</a>
                        </li>
                        <li>
                            <a class="link-color" href="#work">Work</a>
                        </li>
                        <li>
                            <a class="link-color" href="#contact">Contact</a>
                        </li>
                        <li>
                            {/* set href to static file path */}
                            {/* refer to static file like a variable */}
                            <a class="link-color" href={resume}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
