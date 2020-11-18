import React from 'react'
import Iframe from 'react-iframe'
import strings from './about-strings.json'

import './About.css'

export default function About() {
  return (
    <div className='about-container'>
      <div>
        <h1>Education</h1>
        <p>{strings.education}</p>
      </div>
      <div>
        <h1>Experience</h1>
        <p>{strings.experience}</p>
      </div>
      <div style={{width: '600px'}}>
        <Iframe 
          src="resume.pdf"
          width="600px"
          height="700px"/>
      </div>
    </div>
  )
}