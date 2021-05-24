import React from 'react';
import SectionHeading from '../SectionHeading';

export default function index() {
    return (
        <footer className="header-footer-style">

            <SectionHeading title="Contact Me" id="contact"/>

            <nav>
                <ul className="nav-ul-style">
                    <li className="link-color">
                        907.947.8558
                    </li>
                    <li className="link-color">
                        <a href="mailto:adamsiii.robert@gmail.com">adamsiii.robert@gmail.com</a>
                    </li>
                    <li className="link-color">
                        <a href="https://github.com/comatosino" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li className="link-color">
                        <a href="https://www.linkedin.com/in/robert-adams-comatosino/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </nav>

    </footer>
    )
}
