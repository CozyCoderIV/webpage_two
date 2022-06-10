import React from 'react'
import NavBar from './Header/NavBar'
import WBar from './Header/WBar'
import Welcome from './Header/Welcome'
import Night from '../media/night-city.jpg'

function Head() {
  return (
    <div className='head_container'>
        <NavBar />
        <Welcome />
        <WBar />
        <img src={Night} id="banner-img"/>
    </div>
  )
}

export default Head