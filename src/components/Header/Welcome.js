import React from 'react'
import WBar from './WBar'
import PP from '../../media/ProfPic(Web).png'

function Welcome() {
  return (
    <div className='welcome-container'>
        <h1 className='welcome-title'>Welcome, I'm Otis Jackson IV</h1>
        <img src={PP} id="banner-pic"></img>
    </div>
  )
}

export default Welcome