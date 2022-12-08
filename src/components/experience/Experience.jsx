import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mes compétences</h5>
      <h2>Mon expérience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML5 / CSS3</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React.js</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>ReactNative</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>

        </div>


        <div className="experience__backend">
          <h3>Développement Backend</h3>
            <div className="experience__content">
             <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
          </div>
          </div>


        <div className="experience__CMS">
         <h3>Développement CMS</h3>
            <div className="experience__content">
             <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Bubble</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Adalo</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Xano</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>WordPress</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Shopify</h4>
                <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              </div>
          
        
      </div>
     </div> 

    </section>
  )
}

export default Experience