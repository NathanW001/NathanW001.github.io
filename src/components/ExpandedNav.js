import NavBar from './NavBar'
import React from 'react'

function ExpandedNav({ onClickNav }) {
  
  return (
    <div>
      {/* <div className='Navbar'/> */}
      <div>
        <div className='Expanded-Nav'> 
          <h2>About me</h2>
          <h2>Option 2</h2>
          <h2>Option 3</h2>
        </div>
      </div>
      <NavBar onClickNav={onClickNav}/>
    </div>


  )
}

export default ExpandedNav