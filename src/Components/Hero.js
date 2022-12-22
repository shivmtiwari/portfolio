import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="Wrapper">
        <div className="hero">
        <span>Hi, my name is</span>
        <h1 className='Name'>Shivam Tiwari.</h1>
        <h1 className='Profile'>I am a Front end developer.</h1>

        <div className="links">
          <a href="https://github.com/shivmtiwari/" target='_blanck'><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/shivam-tiwari-606421210//" target='_blanck'><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/shivmm_tiwari/" target='_blanck'><i class="fa-brands fa-instagram"></i></a>
        </div>

        <div className="buttons">
            <a href="mailto:shivmmtiwari@gmail.com">Get in touch</a>
            <a href="/">Download CV</a>
        </div>
        </div>
    </div>
  )
}

export default Hero