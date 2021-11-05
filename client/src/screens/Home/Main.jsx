import React from "react";
import "./Main.css";
import Layout from "../../componenets/Layout/Layout";
// import Movies from "../../componenets/Movies/Movies";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/movies";
import { createLikes } from "../../services/likes";
  //lift state up so i can pass down state to main jsx and likes

export default function Main(props) {
  
  const [movies, setMovies] = useState([])
  const [index, setIndex] = useState(0)
  const { currentUserID } = props
  

  useEffect(() => {
    const fetchMovies = async () => {
      const movieLists = await getMovies()
      setMovies(movieLists)
    }
    fetchMovies()
  }, [])
  const handleYesClick = async() => {
    console.log("mi", movies[index])
    const response = await createLikes({
      user_id: currentUserID, movie_id:movies[index].id, rating: true
    })
    console.log(response)
    setIndex((prevIndex) => {
      return prevIndex + 1
    })
  }
  const handleNoClick = () => {
    setIndex((prevIndex) => {
      return prevIndex + 1
    })
  }
  
  return (
    <Layout>
      <div>
        <div>
          <div className="main-frame">
            <div className="movie-poster">
              <div className="mapped-movies"></div>
              <div>
                {/* <img className="home-holder" src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt='default' /> */}
                {/* <Movies/> */}
                {/* {movies} */}
                {/* {movies.map((movie) => ( */}

                  <img
                    className="home-holder"
                    src={movies[index]?.image_url}
                    alt={movies[index]?.title}
                    />
                    {/* ))} */}
              </div>
              {/* <p className="story-card-text">{title}</p> */}
            </div>
          </div>
        </div>
        {/* <div className='button-div'> */}
        <div className="buttons-row">
          <div>
            <button onClick={handleNoClick} className="no-button">no</button>
          </div>
          <div>
            <button onClick={handleYesClick} className="yes-button">yes</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
