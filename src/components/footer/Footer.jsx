import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";

const footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>Flavien</a>

      <ul className='permalinks'>
        <li><a href="# ">Acceuil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#experience">Expériences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Témoignages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://linkedin.com"><CiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; FAV Technologie. Tout droits réservé.</small>
      </div>
    </footer>
  )
}

export default footer