import React from "react";
import "./Main.css";
import Layout from "../../componenets/Layout/Layout";
// import Movies from "../../componenets/Movies/Movies";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/movies";

export default function Main(props) {
  
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const fetchMovies = async () => {
      const movieLists = await getMovies()
      setMovies(movieLists)
    }
    fetchMovies()
  }, [])
  
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
                {movies.map((movie) => (
                  <img
                    className="home-holder"
                    src={movie.image_url}
                    alt={movie.title}
                    />
                    ))}
              </div>
              {/* <p className="story-card-text">{title}</p> */}
            </div>
          </div>
        </div>
        {/* <div className='button-div'> */}
        <div className="buttons-row">
          <div>
            <button className="no-button">no</button>
          </div>
          <div>
            <button className="yes-button">yes</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
