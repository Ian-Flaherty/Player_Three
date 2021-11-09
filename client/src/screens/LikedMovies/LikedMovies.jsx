import React from "react";
import Layout from "../../componenets/Layout/Layout";
import "./LikedMovies.css";
import { useState, useEffect } from "react";
import { getLikes, deleteLikes } from "../../services/likes";
import { Link } from "react-router-dom";


export default function LikedMovies(props) {
  const { currentUser } = props
  const [likes, setLikes] = useState([]);
 
  useEffect(() => {
    const fetchLikes = async () => {
      const likeLists = await getLikes();
      setLikes(likeLists);
    };
    if (currentUser){ fetchLikes() };
  }, [currentUser]);


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
                <div className="curtains-border">
                <img className="like-photos" src={like.movie.image_url} alt="nope" style={{ height: '200px', width: '130px', }} />
                </div>
                <p>{like.rating ? "yes" : "no"}</p>
                <div className="buttons-for-likes">
                <button className="delete-button" onClick={()=>handleLikeDelete(like.id)}>delete</button>
                <div ClassName="edit-div">
                <Link className="edit-button" to={`/Edit/${like.id}`}><button>edit</button></Link>
                  </div>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
