import React from 'react'
import './icon.css'

const Icon = () => {
    return (
        <>
            <div className="sticky-icon">
            <a href="https://github.com/shivmtiwari/" target='_blanck'><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/shivam-tiwari-606421210//" target='_blanck'><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/shivmm_tiwari/" target='_blanck'><i class="fa-brands fa-instagram"></i></a>
                <div class="vl"></div>
            </div>

            


            <div className="sticky-text">
                <a className='vertical-text' href='/'>shivmmtiwari@gmail.com </a>
                <div class="vl"></div>
            </div>

        </>
    )
}

export default Icon