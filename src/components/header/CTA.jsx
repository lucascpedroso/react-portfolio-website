import React from 'react'
import cv from '../../assets/Lucas-Pedroso-Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} download className='btn'>Download CV</a>
      <a href="#portfolio"className='btn btn-primary'>Projects</a>
    </div>
  )
}

export default CTA