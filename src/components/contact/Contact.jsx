import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0xvnp1q', 'template_240wjmj', form.current, '1AXtwJEp-vwdCVRPL')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Dîtes moi tout</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>flavien.augustevirginie@gmail.com</h5>
            <a href="mailto:flavien.augustevirginie@gmail.com">Envoyer un message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Flavien AUGUSTE-VIRGINIE</h5>
            <a href="https://m.me/flavien-auguste-virginie-49374b154/">Envoyer un message</a>
          </article>
        
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33 6 67 71 64 05</h5>
            <a href="https://api.whatsapp.com/send?phone=+33667716405">Envoyer un message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Entrez votre Nom' required/>
          <input type="text" name='email' placeholder='Entrez votre email' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer votre message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact