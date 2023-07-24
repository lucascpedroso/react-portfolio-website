import React from 'react'
import './portfolio.css'
import portImage1 from '../../assets/portfolio-img.png'
import portImage2 from '../../assets/portfolio-img.png'
import portImage3 from '../../assets/portfolio-img.png'
import portImage4 from '../../assets/portfolio-img.png'


const data = [
  {
    id: 1,
    image: portImage1,
    title: 'Insurance company website',
    description: 'An website for an insurance company which was built mainly using React for the frontend and NodeJS for the backend',
    github: 'https://github.com/lucascpedroso',
    demo: 'https://www.cardtotalseguros.com.br/'
  },
  {
    id: 2,
    image: portImage2,
    title: 'Insurance company website',
    description: 'An website for an insurance company which was built mainly using React for the frontend and NodeJS for the backend',
    github: 'https://github.com/lucascpedroso',
    demo: 'https://www.cardtotalseguros.com.br/'
  },
  {
    id: 3,
    image: portImage3,
    description: 'An website for an insurance company which was built mainly using React for the frontend and NodeJS for the backend',
    title: 'Insurance company website',
    github: 'https://github.com/lucascpedroso',
    demo: 'https://www.cardtotalseguros.com.br/'
  },
  {
    id: 4,
    image: portImage4,
    description: 'An website for an insurance company which was built mainly using React for the frontend and NodeJS for the backend',
    title: 'Insurance company website',
    github: 'https://github.com/lucascpedroso',
    demo: 'https://www.cardtotalseguros.com.br/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, description, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Portfolio