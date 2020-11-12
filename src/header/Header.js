import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default function Header() {
  return (
    <div className='nav-container'>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/work'>Work</NavLink>
    </div>
  )
}