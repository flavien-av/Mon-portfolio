import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Julia',
    review: 'Une qualité impeccable et une réactivité rare. Merci Flavien et à très bientôt pour de nouveaux projets.'
  },
  {
    avatar: AVTR2,
    name: 'Jean',
    review: "J'attendais beaucoup de la prestation de Flavien, et j'ai eu plus qu'attendu. Très pro, autonome et rapide."
  },
  {
    avatar: AVTR3,
    name: 'François',
    review: 'Très bonne expérience avec Flavien, le front-end et les connexions aux api se sont bien déroulés. Je recommande !'
  },
  {
    avatar: AVTR4,
    name: 'Yasmina',
    review: "Flavien à non seulement créer un site graphique et élégant mais il regroupe aussi toutes les fonctionnalités que j'espérais (boutique très complète et facile à utiliser, formulaires, galerie photo, version smartphone et tablette...). A chaque besoin Flavien sait répondre présent, modifications du design, mises à jours... ainsi le site reste fiable et bien entretenu. Flavien à toute ma confiance, je recommande."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Ce que disent mes clients</h5>
      <h2>Témoignages</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt='Profil'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials