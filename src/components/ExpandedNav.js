import NavBar from './NavBar'
import Button from './Button'
import React from 'react'

function ExpandedNav({ onClickNav }) {
  
  return (
    <div>
      {/* <div className='Navbar'/> */}
      <div>
        <div className='Expanded-Nav'> 
          <Button onClickButton={() => window.location.replace("/#aboutMe")} buttonText="About Me"/>
          <Button onClickButton={() => window.location.replace("/#MyApps")} buttonText="Personal Projects"/>
          {/* <h2>Option 3</h2> */}
        </div>
      </div>
      <NavBar onClickNav={onClickNav}/>
    </div>


  )
}

export default ExpandedNav