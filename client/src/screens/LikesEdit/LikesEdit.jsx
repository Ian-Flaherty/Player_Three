import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Layout from '../../componenets/Layout/Layout';
import { updateLikes } from '../../services/likes';
import './LikesEdit.css'

export default function LikeEdit(props) {
  const [likes, setLikes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { id } = useParams();
  // const { likes } = props;
  const history = useHistory();

  useEffect(() => {
    const prefillFormData = () => {
      const likeItem = likes.find(like => like.id === Number(id))
      setFormData({
        name: likeItem
      })
    };
    if (likes) {
      prefillFormData();
    }
  }, [likes, id]);

  const handlelikeUpdate = async (id, formData) => {
    const newLike = await updateLikes(id, formData);
    setLikes((prevState) =>
      prevState.map((like) => {
        return like.id === Number(id) ? newLike : like;
      })
    );
    history.push('/Likes');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  
  return (
    <Layout>

    <div className='edit-menu'>

    <form className='this'
      onSubmit={(e) => {
        e.preventDefault();
        handlelikeUpdate(id, formData);
      }}
      >
      <h1>Edit like</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
      </div>
        </Layout>
  );
}
