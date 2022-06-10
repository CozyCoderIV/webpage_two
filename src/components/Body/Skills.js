import React from 'react'
import { DiReact, DiPython, DiJava, DiJsBadge } from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";

function Skills() {
  return (
    <div className='attr-container'>
        <div className='attr-title'><h2>Technologies / Lang.</h2></div>
        <div className='attr-banner'></div>

        <div className='a-list'>
            <div className='a-item'><h4>React.js</h4><DiReact id='react-icon'/></div>
            <div className='a-item'><h4>Javascript</h4><DiJsBadge id='js-icon'/></div>
            <div className='a-item'><h4>Python</h4><DiPython id='py-icon'/></div>
            <div className='a-item'><h4>Java</h4><DiJava id='ja-icon'/></div>
            <div className='a-item'><h4>C</h4><FaCuttlefish id='c-icon'/></div>
        </div>
    </div>
  )
}

export default Skills