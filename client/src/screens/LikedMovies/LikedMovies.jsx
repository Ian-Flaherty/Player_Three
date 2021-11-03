import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './LikedMovies.css'

export default function LikedMovies() {
  return (
    <Layout>
    <div className='liked-movies'>
        <h1>Liked movies</h1>
        <div className="liked-stuff">
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
        </div>
      </div>
      </Layout>
  )
}
