import React from 'react';
import contact from '../images/mango.png';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SmtpService from 'https://smtpjs.com/v3/smtp.js';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_zt7nh8v', 'template_p5rasy2', e.target, 'Duw-6Q4MWAUIl5xvw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div className='title'>
        <p className='title'>CONTACT US</p>
      </div>
      <div className='contact'>
        <div className='left'>
            <img src={contact}></img>
        </div>
        <div className='right'>
        <form  onSubmit={sendEmail}>
          <label>
            <span className='input'>Name</span>
          </label>
          <div className='input-before'>
            <input type="text" className='name' name='name' placeholder='Your full name'/>
          </div>
          <label>
            <span className='email'>Email</span>
          </label>
          <div className='input-before'>
            <input type="email" className= "email" name='email' placeholder='Your email adress'/>
          </div>
          <label>
          <span className='email'>Message</span>

          </label>
          <div className='input-before' id='textarea'>
            <textarea name="message" className= "message" placeholder='Your message:'/>
          </div>
          <button className='purchase'>Send <FontAwesomeIcon icon={faCheck} /></button>

        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact