import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './Settings.css'
import { Link } from 'react-router-dom';

export default function Settings(props) {
  const { handleLogout } = props;
  return (
    <Layout>
    <div className='submit-div'>
        <h1> Settings</h1>
        <Link to="/"><button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
      </Layout>
  )
}
