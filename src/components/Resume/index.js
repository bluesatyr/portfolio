import React from 'react';

function Resume() {

    return (
        <section className="contact-text">
            <h2>My Resume</h2><br></br>
            <h3 className="download"><a href="https://bluesatyr.github.io/assets/ShawnEvans-Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume in PDF Format  <i class="far fa-file-pdf"></i></a></h3>
            <h3>Technologies Known</h3>
            <div className="resume-grid">
                <ul>
                    <li>html</li>
                    <li>css3</li>
                    <li>JavaScript / ES6</li>
                    <li>Responsive Web Design</li>
                    <li>Web Accessibility</li>
                    <li>Third-Part API's</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>mySQL</li>
                </ul>
                <ul>
                    <li>sqlite</li>
                    <li>MongoDB</li>
                    <li>ORM's</li>
                    <li>Progressive Web Apps</li>
                    <li>Single Page Applications</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Jamstack</li>
                </ul>
            </div>
            
            
        </section>
        
        
        
    )
    
}

export default Resume;

