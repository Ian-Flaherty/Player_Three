import { useState } from 'react';
import Layout from '../../componenets/Layout/Layout';
import './SignUp.css'
import { Link } from 'react-router-dom';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  // const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  return (
    <Layout>
    <form className='sign-up-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
      >
      <h3>SignUp</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          />
      </label>
      <br />
        <Link to='/Home'><button type="submit">Submit</button>
        </Link>
    </form>
          </Layout>
  );
}
