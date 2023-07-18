import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/lucas-pedroso-c/" target='_blank'><BsLinkedin /></a>
      <a href="github.com/lucascpedroso" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials