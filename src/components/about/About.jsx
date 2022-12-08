import React from 'react'
import './about.css'
import MOI from '../../assets/Flavien PP.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>À savoir</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MOI} alt="Flavien" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>3+ années d'expériences</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients dans le monde</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projets</h5>
              <small>25 projets</small>
            </article>
          </div>

          <p>
          Je suis un développeur Javascript Full stack qui développe des sites internet, des applications web et mobiles ainsi que des logiciels en tout genre pour mes clients et moi-même par passion depuis bientôt 5 ans. En plus de développer des applications en respectant les standards du web, j'apporte conseil à mes clients dans les domaines stratégiques comme le SEO, l'expérience utilisateur ou les choix techniques permettant de supporter les futures montées en charge. Je reste à votre entière disposition pour tout renseignement, n'hésitez pas à me contacter si besoin.
          </p>
          <a href="#content" className='btn btn-primary'>Discutons</a>
        </div>
      </div>
    </section>
  )
}

export default About