import React from 'react'

export default function Project(props) {
    return (
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
    )
}

