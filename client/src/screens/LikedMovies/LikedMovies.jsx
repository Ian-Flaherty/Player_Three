import React from "react";
import Layout from "../../componenets/Layout/Layout";
import "./LikedMovies.css";
import { useState, useEffect } from "react";
import { getLikes, deleteLikes } from "../../services/likes";
import { Link } from "react-router-dom";
// import { getMovies } from '../../services/movies'
// import { setLikes } from '../../services/likes'

export default function LikedMovies(props) {
  const { currentUser } = props
  const [likes, setLikes] = useState([]);
  // const [movies, setMovies] = useState([])
  //pass down movies as props
  //in my useeffect set liked movies state to filter only movies the user has liked
  // map through the liked movies

  useEffect(() => {
    const fetchLikes = async () => {
      const likeLists = await getLikes();
      setLikes(likeLists);
    };
    if (currentUser){ fetchLikes() };
  }, [currentUser]);

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
      <div className="liked-movies">
        <h1>Liked movies</h1>
        <div className="liked-movie-container">
          <div className="liked-stuff">
            {likes.map((like) => (
              <div key={like.id}>
                <img src={like.movie.image_url} alt="nope" style={{ height: '200px', width: '130px', }} />
                <p>{like.rating? "yes": "no"}</p>
                <button onClick={()=>handleLikeDelete(like.id)}>delete</button>
                <Link to={`/Edit/${like.id}`}><button>edit</button></Link>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
