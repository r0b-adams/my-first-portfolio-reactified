import React from 'react';
import SectionHeading from '../SectionHeading';
import resume from './Adams_Robert_Resume.pdf'; // tells webpack to use this file

export default function Header() {

    return (
            <header className="header-footer-style">

                <SectionHeading title="Robert Adams"/>

                <nav>
                    <ul className="nav-ul-style">
                        <li className="link-color">
                            <a href="#about">About Me</a>
                        </li>
                        <li className="link-color">
                            <a href="#work">Work</a>
                        </li>
                        <li className="link-color">
                            <a href="#contact">Contact</a>
                        </li>
                        <li className="link-color">
                            <a href={resume}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
