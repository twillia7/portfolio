import React from 'react'
import Iframe from 'react-iframe'

import './About.css'

export default function About() {
  return (
    <div className='about-container'>
      
      <Iframe 
        src="resume.pdf"
        width="600px"
        height="600px"/>
    </div>
  )
}