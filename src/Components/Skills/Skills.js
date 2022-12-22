import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <>
   <div id="skills">
   <div className="aboutWrap" id='about'>
    <div className="title">
        <span>02.</span>
        <h3>My Skills</h3>
        <hr /> 
    </div>
    </div>
    <div className="skill-bars">
    <div className="bar">
      <div className="info">
        <span>HTML</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Javascript</span>
      </div>
      <div className="progress-line js">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Python</span>
      </div>
      <div className="progress-line react">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>MySQL</span>
      </div>
      <div className="progress-line bootstrap">
        <span></span>
      </div>
    </div>
  </div>
   </div>
  </>
  )
}

export default Skills