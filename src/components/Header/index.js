import React from 'react';

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
                            <a class="link-color" href="./Assets/Adams_Robert Resume.pdf">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
