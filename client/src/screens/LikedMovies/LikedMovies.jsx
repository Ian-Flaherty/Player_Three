import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './LikedMovies.css'
import { useState, useEffect } from 'react'
import { getLikes, deleteLikes } from '../../services/likes'
// import { getMovies } from '../../services/movies'
// import { setLikes } from '../../services/likes'

export default function LikedMovies(props) {
  // const [ user_id, movie_id, likes ] = props
  const [likes, setLikes] = useState([])
  // const [movies, setMovies] = useState([])
  //pass down movies as props
  //in my useeffect set liked movies state to filter only movies the user has liked
  // map through the liked movies

  
  useEffect(() => {
    const fetchLikes = async () => {
      const likeLists = await getLikes()
      setLikes(likeLists)
    }
    fetchLikes()
  }, [])


  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const movieLists = await getMovies(movies.rating === true)
  //     setMovies(movieLists)
  //   }
  //   fetchMovies()
  // }, [])

  const handleLikeDelete = async (id) => {
    await deleteLikes(id);
    setLikes((prevState) => prevState.filter((like) => like.id !== id));
  };

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
          <button handleLikeDelete={handleLikeDelete}>delete</button>
          <button>edit</button>
        </div>
      </div>
      </Layout>
  )
}
