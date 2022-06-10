import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Foot() {
  return (
    <div className='foot-container'>
        <div className='flink-container'>
            <a id='fl-1'><FaGithub id='f-git'/></a>
            <a id='fl-2'><FaInstagram id='f-inst'/></a>
            <a id='fl-3'><FaLinkedin id='f-link'/></a>
        </div>

        <div className='quote-container'>
            
        </div>
        <div className='foot-banner'></div>
    </div>
  )
}

export default Foot