import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateLikes } from '../../services/likes';

export default function LikeEdit(props) {
  const [likes, setLikes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { id } = useParams();
  // const { likes } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const likeItem = likes.find(like => like.id === Number(id))
      setFormData({
        name: likeItem.id
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
    // history.push('/Likes');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
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
  );
}
