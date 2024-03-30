import React from 'react'
import './style.css'
import Card from "./Card"

const Main = () => {
  return (
    <>
    <div className='header'>
          <nav>
            <ul>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Theatre</a></li>
                <li><a href='#'>Comedy</a></li>
                <li><a href='#'>Fantastic</a></li>
                <li><a href='#'>Drama</a></li>
                <li><a href='#'>Ujis</a></li>
            </ul>
          </nav>
          <form>
            <div className="search-btn">
                <input type="text" placeholder="Enter Movie Name" className='inputText' />
                <button type="onClick">search</button>
            </div>
          </form>
    </div>
    <div className="container">
        <Card/>
    </div>
    </>
  )
}

export default Main;