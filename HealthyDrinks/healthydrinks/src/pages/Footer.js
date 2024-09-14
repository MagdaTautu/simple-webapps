import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons' ;
function Footer() {
  return (
    <section id='footer'>
        <div className='column'>
            <h1>FreshFULLworks.</h1>
            <p>Lorem ipsum dolor, 
              sit amet consectetur 
              adipisicing elit. 
              Velit, vel quia sunt 
              expedita consectetur 
              nihil ut ea quasi! 
              Dicta, blanditiis.</p>
              <div className='icons'>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
              </div>
        </div>
        <div className='column'>
        <h1>Work with us!</h1>
            <p>Lorem ipsum dolor, 
              sit amet consectetur 
              adipisicing elit. 
              Velit, vel quia sunt 
              expedita consectetur 
              nihil ut ea quasi! 
              Dicta, blanditiis.</p>
              <p className='number'>
                +090993346257
              </p>
        </div>
        <div className='column'>
            <h1>Find us</h1>
            <p>Lorem ipsum dolor, 
              sit amet consectetur 
              adipisicing elit. 
              <br></br>
            </p>
              <p className='bold'>freshfullworks@fsh.com</p>
            
            <p className='number'>
              +090993346257
            </p>
        </div>
    </section>
  )
}

export default Footer