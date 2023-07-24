import React from 'react'
import { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_wf9mi6j', 'template_8d8ztux', form.current,'brs63geBpdy1zgh8h')

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
           <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>lucas.scpedroso@gmail.com</h5>
            <a href="mailto:lucas.scpedroso@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
           <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+4407484165082" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact