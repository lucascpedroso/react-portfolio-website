import React from 'react'
import './about.css'
import me from '../../assets/Karen_e_Lucas13.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil porro aspernatur nulla accusantium ea illo neque dignissimos asperiores magni, doloribus aut non doloremque modi alias inventore explicabo officia aperiam qui.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About