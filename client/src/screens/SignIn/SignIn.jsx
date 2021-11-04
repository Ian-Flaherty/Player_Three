
import Layout from '../../componenets/Layout/Layout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
    <form className='login-box'
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
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
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='register-button'><Link to='/SignUp'>Register</Link></button>
        <Link to='/Home'> <button className='submit-button'>Submit</button>
      </Link>
      </form>
      </Layout>
  );
}