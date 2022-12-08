import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que j'offre</h5>
      <h2>Mes services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Développement web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Site internet ou site vitrine</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Boutique e-commerce ou page de vente</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Application web ou logiciel de gestion en tout genre</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Application mobile hybride</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>DAPP / NFT / DAO</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Développement de tokens</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Smart contrats</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Création de marketplace NFT</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Développement de DApp</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Mise en place de DAO</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Chef de projet web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Etude et conception du cahier des charges du projet.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Rédaction des spécifications fonctionnelles et techniques.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Définition et tenue des plannings.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Organisation des étapes de validation à la fin de chaque phase projet : conception, réalisation, recette, déploiement.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Optimisation des fonctionnalités de la plateforme pour un parcours utilisateur plus simple et efficace.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Affectation des ressources nécessaires au projet.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services
