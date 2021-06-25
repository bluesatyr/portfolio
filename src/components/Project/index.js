import React, { useState } from 'react';

const Portfolio = () => {

    const [projects] = useState([
        {
            title: 'Nanji-desu-ka',
            deployed: 'https://bluesatyr.github.io/nanji-desu-ka/',
            github: 'https://github.com/bluesatyr/nanji-desu-ka',
            image: 'card1' 
        },
        {
            title: 'SWATCH Makeup Reviews',
            deployed: 'https://swatch-makeup-reviews.herokuapp.com/',
            github: 'https://github.com/Project-Two-Group-Nine/SWATCH',
            image: 'card2'
        },
        {
            title: 'Mind Decks Flashcards',
            deployed: 'https://group5-project3-uot-duolingo.herokuapp.com/',
            github: 'https://github.com/Uot-Project3-Group05/uot-project3-group5',
            image: 'card3'
        },
        {
            title: 'Okami SCA',
            deployed: 'http://bluesatyr.github.io/okamisca',
            github: '',
            image: 'card4'
        },
        {
            title: 'Tech-Blog',
            deployed: 'http://bluesatyr-tech-blog.herokuapp.com/',
            github: 'https://github.com/bluesatyr/tech-blog',
            image: 'card5'
        },
        {
            title: 'Tweet-Tracks',
            deployed: 'https://projone.github.io/tweet-tracks/',
            github: 'https://github.com/projone/tweet-tracks',
            image: 'card6'
        },
    ])

    return (
        <section className="content projects" id="projects">
            {/* Grid Container */}
            <div className="project-grid">
                {projects.map((project) => (
                    <a href={`${project.deployed}`} className={`card ${project.image}`}  target="_blank" rel="noopener noreferrer" key={`${project.key}`}>
                        <div>
                            <h3>{project.title}</h3>
                            <div className="overlay"></div>
                        </div>
                    </a>
                ))}
            </div>
            

        </section>
    )
}

export default Portfolio