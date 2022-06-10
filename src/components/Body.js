import React from 'react'
import SectorA from './Body/SectorA'
import SectorB from './Body/SectorB'

function Body() {
  return (
    <div className='body-container'>
        <SectorB />
        <SectorA />
    </div>
  )
}

export default Body