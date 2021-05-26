import React from 'react'

import SectionHeading from '../SectionHeading';
import MainBox from '../MainBox';
import ContentBox from '../ContentBox';

export default function ProjectPage(props) {



    return (

    <MainBox>
        <SectionHeading title={props.name}/>
        <ContentBox>
            <section className="project-card">
                <a href={props.deployLink} target="_blank" rel="noreferrer"><img src={props.imgLink} alt={props.name}/></a>
                <section className="title-card">
                    <h2 className="title-card-heading">
                        {props.name}
                    </h2>
                    <h3 className="title-card-lang">
                        {props.langs}
                    </h3>
                    <h3 className="title-card-lang">
                        <a className="link-color" href={props.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                    </h3>
                </section>
            </section>
            <section className="project-card">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </section>
        </ContentBox>
    </MainBox>

    )
}
