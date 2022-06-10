import React from 'react'

function Education() {
  return (
    <div className='edu-container'>
        <div className='edu-title'><h2>Education</h2></div>
        <div className='edu-banner'></div>

        <div className='edu-list'>
            <div className='e-item'>
                <h4 className='ei-title'>Aledo High School</h4>
                <h4 className='ei-date'>Fall of 2016 - Spring of 2020</h4>
            </div>

            <div className='e-item'>
                <h4 className='ei-title'>Weatherford College</h4>
                <h4 id='w-date'>Spring of 2018 - Spring of 2020</h4>
            </div>

            <div className='e-item'>
                <h4 className='ei-title'>Louisiana State University</h4>
                <h4 id='lsu-date'>Fall of 2020 - Current</h4>
            </div>
        </div>
    </div>
  ) 
}

export default Education