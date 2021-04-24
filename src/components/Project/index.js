import React, { useState } from 'react';

const Portfolio = () => {

    const [projects] = useState([
        {
            title: 'Nanji-desu-ka',
            deployed: '',
            github: '',
            image: ''
        },
        {
            title: 'Swatch',
            deployed: '',
            github: '',
            image: ''
        },
        {
            title: 'Tweet-Tracks',
            deployed: '',
            github: '',
            image: ''
        },
        {
            title: 'Okami SCA',
            deployed: '',
            github: '',
            image: ''
        },
        {
            title: 'Tech-Blog',
            deployed: '',
            github: '',
            image: ''
        },
        {
            title: '',
            deployed: '',
            github: '',
            image: ''
        },
    ])

    return (
        <div>
            {projects.map((project) => (
                <div className="card">
                    <a href={`${project.deployed}`}>{project.title}</a>
                    <a href={`${project.github}`}>Github</a>
                </div>
            ))}
        </div>
    )
}

export default Portfolio