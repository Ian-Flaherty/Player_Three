import React from 'react'
import Layout from '../../componenets/Layout/Layout'
import './Settings.css'

export default function Settings(props) {
  const { handleLogout } = props;
  return (
    <Layout>
    <div className='submit-div'>
        <h1> Settings</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      </Layout>
  )
}
