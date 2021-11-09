import React from "react";
import "./Main.css";
import Layout from "../../componenets/Layout/Layout";
// import Movies from "../../componenets/Movies/Movies";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/movies";
import { createLikes } from "../../services/likes";
//lift state up so i can pass down state to main jsx and likes


export default function Main(props) {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const { currentUserID } = props;

  useEffect(() => {
    const fetchMovies = async () => {
      const movieLists = await getMovies();
      setMovies(movieLists);
    };
    fetchMovies();
  }, []);

  const handleYesClick = async () => {
    console.log("mi", movies[index]);
    const response = await createLikes({
      user_id: currentUserID,
      movie_id: movies[index].id,
      rating: true,
    });
    console.log(response);
    setIndex((prevIndex) => {
      return prevIndex + 1;
    });
  };
  const handleNoClick = () => {
    setIndex((prevIndex) => {
      return prevIndex + 1;
    });
  };

  return (
    <Layout>
      <div>
        <div>
          <div className="main-frame">
            <div className="movie-poster">
              <div className="mapped-movies"></div>
              <div>
                <img
                  className="home-holder"
                  src={movies[index]?.image_url}
                  alt={movies[index]?.title}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="buttons-row">
          <div>
            <button onClick={handleNoClick} className="no-button">
              <img className="red-x" alt="red" src="https://www.driversupport.com/wp-content/uploads/2019/04/red-x-on-network-icon.png"/>
            </button>
          </div>
          <div>
            <button onClick={handleYesClick} className="yes-button">
              <img className="green-check" alt='green'src= "data:image/png;base64,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"/>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
