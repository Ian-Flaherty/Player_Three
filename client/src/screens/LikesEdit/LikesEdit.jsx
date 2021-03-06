import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Layout from '../../componenets/Layout/Layout';
import { getLike, updateLikes } from '../../services/likes';
import './LikesEdit.css'

export default function LikeEdit(props) {
  const { currentUser }= props
  const [currentLike, setCurrentLike] = useState(null);
  const { id } = useParams();
  
  const history = useHistory();

  useEffect(() => {
    const prefillFormData = async () => {
      const likeItem = await getLike(id)
      setCurrentLike(likeItem)
    };
    if (currentUser) { prefillFormData()}
    
  }, [currentUser, id]);

  const handlelikeUpdate = async (value) => {
    await updateLikes(id, { rating: value });
    history.push('/LikedMovies');
  };


  
  return (
    <Layout>

    <div className='edit-menu'>

    <div className='this'>
      <h1 className="edit-border">Edit like</h1>
      <div>
          <div className="main-frame">
            <div className="movie-poster-edit">
              <div className="mapped-movies"></div>
              <div>
                <img
                  className="home-holder"
                  src={currentLike?.movie.image_url}
                  alt={currentLike?.movie.title}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="buttons-row-edit">
          {/* <div> */}
            <button onClick={()=>handlelikeUpdate(false)} className="no-button-edit">
              NO
            </button>
          {/* </div> */}
          {/* <div> */}
            <button onClick={()=>handlelikeUpdate(true)} className="yes-button-edit">
              YES
            </button>
          {/* </div> */}
      <br />
      {/* <button className="submit-edit-button">Submit</button> */}
    </div>
      </div>
      </div>
        </Layout>
  );
}
