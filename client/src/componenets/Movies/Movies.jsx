import './Movies.css'
import React from 'react'

export default function Movies(props) {
  const { title, movies } = props
  console.log({ movies })
  return (

    <div className='story-card-image-container'>
      <img id="movies-image-id" className='movies-image'
      src={movies}
      
        onError={(e) => { e.target.src = 'blank' }}
        alt="done goofed"
      />
      <p className="movie-card-text">{title}</p>
    </div>


  )
}