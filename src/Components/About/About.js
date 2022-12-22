import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="aboutWrap" id='about'>
        <div className="title">
          <span>01.</span>
          <h3>About Me</h3>
          <hr />
        </div>
        <div className="about">
          <div className="content">
            <p>Hello 👋. I'm Shivam.</p>
            <br />
            <p>I'm  currently pursuing my B.Tech Final Year in CSE branch from <a href="/"><span>Kali Charan Nigam Institute of Technology (KCNIT), Banda
            </span></a>, which is affiliated to <a href="/"><span>AKTU Lucknow. <br />
            </span> </a>

              I'm interested in building scalable web applications and Frontend Development.</p>
              <br />
              <p>I often like to solve problems on Data Structures and Algorithms on <a href="/"> <span>Geeks For Geeks</span></a>.</p>
              <br />
              <p>Here are a few technologies I've been working with recently:</p>
              <br />
              <br />
              <div className="technology">
                <ul>
                  <li> <i class="fa-solid fa-hand-point-right"></i> HTML</li>
                  <li> <i class="fa-solid fa-hand-point-right"></i> Javascript</li>
                  <li><i class="fa-solid fa-hand-point-right"></i> Bootstrap</li>
                </ul>
                <ul>
                  <li><i class="fa-solid fa-hand-point-right"></i> CSS3</li>
                  <li><i class="fa-solid fa-hand-point-right"></i> React JS</li>
                  <li><i class="fa-solid fa-hand-point-right"></i> Tailwind CSS</li>
                </ul>
              </div>
          </div>.

          <div className="image">
            <img src={require('../../images/about.png')} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About