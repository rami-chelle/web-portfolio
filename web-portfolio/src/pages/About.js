import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id = 'about-me'>
      <div class = 'about-me-header'>
        <h2>About me</h2>
        
    </div>
    
    <div class = 'about-me-container'>
        
        <div class = 'about-me-text'>
            <p>
                I joined this bootcamp because I want to learn and develop my skills with regards to technology. This new normal taught me that there is always something to learn beyond.
                All you need is hardwork, dedication and passion to finish what you started.
            </p>

            <p>
              I'm currently enrolled at <a href='https://www.upliftcodecamp.com/courses' target='https://www.upliftcodecamp.com/courses'>Full Stack Web Development Bootcamp</a>. The scholarship given by the DICT in partnership with Uplift Code Camp helped me to get out in my comfort zone.
            </p>

            <p>
             I can now create a full stack app with the  use of MERN.
            </p>
        </div>

        <div class='about-me-image'>
            <img src = 'https://res.cloudinary.com/dpbauifc3/image/upload/v1670168412/web-portfolio/me_tkxe1t.png' alt = 'ramichelle'/> 
        </div>
    </div>
</section>
  )
}

export default About;