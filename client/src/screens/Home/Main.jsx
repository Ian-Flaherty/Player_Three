import React from "react";
import "./Main.css";
import Layout from "../../componenets/Layout/Layout";



export default function Main(props) {
  const { movies } = props

  return (
    <Layout>
<div>
    <div>
      <div className="main-frame">
        <div className="movie-poster">
              <div className='mapped-movies'>
                
              </div>
              <div>
              <img src="https://alternativemovieposters.com/wp-content/uploads/2012/12/socialnetworkbg1.jpg" alt='default'/>
              </div>
            </div>
        </div>
      </div>
      {/* <div className='button-div'> */}
        <div className="buttons-row">
          <div>
            <button className='no-button'>no</button>
          </div>
          <div>
            <button className='yes-button'>yes</button>
          </div>
        </div>
      </div>
  </Layout>
  );
}