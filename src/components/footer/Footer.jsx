import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/lucas-pedroso-c/"><BsLinkedin /></a>
        <a href="github.com/lucascpedroso"><FaGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Lucas Pedroso. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer