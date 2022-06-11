import React from 'react'
import ReactPlayer from 'react-player'; 
import { FaGithub, FaStar, FaStarHalfAlt, FaCertificate } from "react-icons/fa";

function SectorB() {
  return (
    <div className='sector-container' id='sector-B'>
        <div className='proj-container'><h2 className='proj-title'>Featured Project</h2></div>
        <div className='proj-banner'></div>

        <div className='content-box'>
          <div className='descript-box'>
            <div id='start-box'><h3>Start Date:</h3><h3 id='date-1'>03/01/2021</h3></div>
            <div id='finish-box'><h3>Finish Date:</h3><h3 id='date-2'>12/27/2021</h3></div>
            <div id='diff-box'>
              <h3>Difficult Lvl:</h3>
              <div id='star-box'>
                <FaStarHalfAlt/>
                <FaStarHalfAlt/>
                <FaStarHalfAlt/>
                <FaStarHalfAlt/>
                <FaStarHalfAlt/>
              </div>
            </div>
            <div id='code-box'>
              <h3 id='lang-title'>Project Lang:</h3>
              <div id='s-code'> <h4>Java</h4> </div>
              <a id='link-box' href='https://github.com/CozyCoderIV/Galaga-VII/blob/main/Galaga%20VII/src/com/company/Game.java' target="_blank"><FaGithub id='s-icon'/></a>
            </div>
          </div>
          <div className='v2-box'>
            <div className='v2-title-container'><h2 className='v2-title'>Galaga VII</h2></div>
            <div className='v2-banner'></div>
            <div className='v2-descript-box'>
              <p>"This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."</p>
            </div>
          </div>
          <div className='vid-box'>
              <ReactPlayer controls autoplay width='560px' height='383px' url=" https://youtu.be/gK-QEVaVFCw"/>
              {/* https://youtu.be/olUOlB3fQd8 rock dodger*/}
              {/* https://youtu.be/gK-QEVaVFCw  Galaga*/}
              {/* https://youtu.be/14fn1OUn4bA death pong*/} 
          </div>
        </div>
    </div>
  )
}

export default SectorB