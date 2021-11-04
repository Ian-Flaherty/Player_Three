import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './LikedMovies.css'
// import { useState, useEffect } from 'react'
// import { getLikes } from '../../services/Likes'


export default function LikedMovies(props) {
  // const [likes, setLikes] = useState([])
  
  // useEffect(() => {
  //   const fetchLikes = async () => {
  //     const likeLists = await getLikes()
  //     setLikes(likeLists)
  //   }
  //   fetchLikes()
  // }, [])
  
  return (
    <Layout>
    <div className='liked-movies'>
        <h1>Liked movies</h1>
        <div className="liked-stuff">
        {/* {likes.map((like) => (
                  <img
                    className="home-holder"
                    src={like.id.image_url}
                    alt={like.title}
                    />
                    ))} */}
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
          <img className="imug" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt="default"/>
        </div>
      </div>
      </Layout>
  )
}
