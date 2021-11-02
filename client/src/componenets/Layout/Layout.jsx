import React from 'react'
import Header from '../Header/header'
import './Layout.css'


export default function Layout(props) {
  return (
    <>
      <Header user={props.user}/>
    <div className='layout'>
      <div>
        <div className='layout-children'>
          {props.children}
        </div>
      </div>
    </div>
</>
      )
}
