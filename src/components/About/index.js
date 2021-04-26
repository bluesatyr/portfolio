import React from 'react';

function About() {

  return (
    <section class="content about-me" id="about-me">
              <div className="about-grid">
                <div className="avatar">
                  <img src={require(`../../assets/images/avatar.jpg`).default} alt="Shawn's avatar"></img>
                </div>
                <div class="about-text">
                    <h2>About Me</h2>
                    <p>I am a web developer who believes in bringing the best possible experience to the end user. A  modern polymath, I have worn many different hats in life: musician, dementia specialist, world traveller, event planner. Above all I am a life-long learner.  I bring  a unique perspective to development, informed by my travels and many experiences in various fields.</p>
                    <p>As a citizen of the world, I see technology as an avenue to bring people together and to bridge distances caused by geography, nationality and language.  The web should ultimately be intuitive, accessible and enjoyable. As a developer I see that as my primary responsibility.</p>
                </div>
              </div>  
              
          </section>
  )
}

export default About