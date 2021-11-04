import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './LikedMovies.css'
import { useState, useEffect } from 'react'
import { getLikes } from '../../services/likes'
// import { setLikes } from '../../services/likes'

export default function LikedMovies(props) {
  // const [ user_id, movie_id, likes ] = props
  const [likes, setLikes] = useState([])
  
  useEffect(() => {
    const fetchLikes = async () => {
      const likeLists = await getLikes()
      setLikes(likeLists)
    }
    fetchLikes()
  }, [])
  
  return (
    <Layout>
    <div className='liked-movies'>
        <h1>Liked movies</h1>
        <div className='liked-movie-container'>
        <div className="liked-stuff">
        {likes.map((like) => (
          <img src={likes} alt="nope"/>
          // <p>{user_id}</p>
          
                  
                    ))} 
          </div>
          <button>delete</button>
          <button>edit</button>
        </div>
      </div>
      </Layout>
  )
}
