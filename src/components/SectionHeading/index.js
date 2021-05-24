import React from 'react'

export default function index({id, title}) {

    return (
        <h1 id={id} className="main-heading-style">
            {title}
        </h1>
    )
}
