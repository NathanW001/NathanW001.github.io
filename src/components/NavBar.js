import { FaBars } from 'react-icons/fa'
import React from 'react'

function NavBar({ onClickNav }) {
  

  return (
    <div className='Navbar'>
      <h1>Nathan's Website!</h1>
      <div>
        <FaBars className='Clickable Nav-bars' size={48} onClick={onClickNav} />
      </div>
    </div>
  )
}
export default NavBar