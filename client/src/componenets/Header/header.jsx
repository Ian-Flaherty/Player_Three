import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <div className='nav'>
        <NavLink className='liked-movies-link' to='/LikedMovies'>Likes</NavLink>
        <NavLink className='header-title' to='/'>LYFE</NavLink>
        <NavLink className='Settings-link' to='/Settings'>Settings</NavLink>
        
      
    </div>
    </nav>
  )
}
