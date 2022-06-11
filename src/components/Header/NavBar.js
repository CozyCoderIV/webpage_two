import React from 'react'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <h3 className='nav-title'>Otis</h3>
      <h3 className='nav-title-2'>Jackson IV</h3>

      <div id='link-list'>
        <div id='resume-link'><h3>Resume</h3></div>
        <div id='proj-page-link'><h3>Projects</h3></div>
      </div>
    </nav>
  )
}

export default NavBar