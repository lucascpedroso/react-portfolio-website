import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-picture.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi! I'm</h5>
        <h1>Lucas Pedroso</h1>
        <h5>Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="my picture" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header