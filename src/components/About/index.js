import React from 'react';

function About() {

  return (
    <section className="content about-me" id="about-me">
              <div className="about-grid">
                <div className="avatar">
                  <img src={require(`../../assets/images/avatar.jpg`).default} alt="Shawn's avatar"></img>
                </div>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>Former Recreation Manager and Music Therapist transitioning to a Full-Stack 
                      Web Developer role after recently earning a Full-Stack Web Development 
                      certificate through a University of Toronto Bootcamp.</p>
                      <p>With newly developed skills in Node.js, Express, MongoDB, 
                        MySQL, React.js, GraphQL and a diverse experience in project 
                        management, accessibility and asset creation, I am passionate 
                        about creating apps which engage users and help them to navigate 
                        through our data-driven world.</p> 

                </div>
              </div>  
              
          </section>
  )
}

export default About