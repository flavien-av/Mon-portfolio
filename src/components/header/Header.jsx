import React from 'react'
import './header.css'
import CTA from './CTA'
import MOI from '../../assets/Flavien A-V.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Bienvenue, je suis</h5>
          <h1>AUGUSTE-VIRGINIE Flavien</h1>
          <h5 className="text-light">Développeur Javascript Full Stack</h5>
          <CTA />
          <HeaderSocials />

          <div className="moi">
            <img src={MOI} alt="moi" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default header