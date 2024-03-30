import React from 'react'


const Card = () => {
  return (
  
    <div className='movie'>
            <img src="./images/movie12.jfif" className="poster"/>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">Movie Title</h4>
                    <p className="rating">9.7</p>
                </div>
            </div>
            <div className="overview">
                    <h1>overview</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
    </div>
    
  )
}

export default Card;