import React from 'react'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <h3 className='nav-title'>Otis</h3>
      <h3 className='nav-title-2'>Jackson IV</h3>

      <div id='link-list'>
        <div id='resume-link'><a><h3>Resume</h3></a></div>
        <div id='proj-page-link'><a><h3>Projects</h3></a></div>
      </div>
    </nav>
  )
}

export default NavBar