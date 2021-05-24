import React from 'react';
import Subtitle from '../Subtitle';
import SectionHeading from '../SectionHeading';
import MainBox from '../MainBox';
import AboutBox from '../AboutBox';
import ContentBox from '../ContentBox';
import Project from '../Project';

import projects from "./projects.json";

export default function index() {
    return (
        <main>

            <Subtitle/>

            <MainBox>
                <SectionHeading title="About Me" id="about"/>
                <ContentBox>
                    <AboutBox/>
                </ContentBox>
            </MainBox>
            
            <MainBox>
                <SectionHeading title="Work" id="work"/>
                    <ContentBox>
                        {projects.map(project=>
                        <Project key={project.projectName} 
                                name={project.projectName} 
                                langs={project.projectLangs} 
                                deployLink={project.deployLink} 
                                githubLink={project.githubLink} 
                                imgLink={project.imgLink}/>)}
                    </ContentBox>
            </MainBox>
            
        </main>
    )
}
