import React from "react";
import "./Main.css";
// import Movies from "../../componenets/Movies/Movies";
import { getMovies } from "../../services/movies";
import Layout from "../../componenets/Layout/Layout";
import { useState, useEffect } from "react";


export default function Main(props) {
  const [movies, setMovies] = useState([])
  
useEffect(() => {
  const fetchMovies = async () => {
    const allMovies = await getMovies()
    setMovies(allMovies)
      
  }
  fetchMovies()
  // eslint-disable-next-line
}, [])

  return (
    <Layout>
<div>
    <div>
      <div className="main-frame">
        <div className="movie-poster">
              <div className='mapped-movies'>
                
              </div>
              <img src={movies.image_url} alt='default'/>
            </div>
        </div>
      </div>
      {/* <div className='button-div'> */}
        <div className="buttons-row">
          <div>
            <button className='no-button'>no</button>
          </div>
          <div>
            <button className='yes-button'>yes</button>
          </div>
        </div>
      </div>
    
  </Layout>
  );
}
