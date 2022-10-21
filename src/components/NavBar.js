import { FaBars, FaGithub, FaLinkedin, FaEnvelope, FaReadme } from 'react-icons/fa'
import React from 'react'

function NavBar({ onClickNav }) {
  

  return (
    <div className='Navbar'>
      <div className='App-topbuttons'>
        <h1>Nathan's Website</h1>
        <div className='App-topbuttons'>
          <a href='https://github.com/NathanW001' className='App-appbutton' target="_blank" rel="noopener noreferrer">
            <FaGithub size={48} />
            Github
          </a>
          <a href='https://www.linkedin.com/in/nathan-wootton-22662b202/' target="_blank" rel="noopener noreferrer" className='App-appbutton'>
            <FaLinkedin size={48} />
            LinkedIn
          </a>
          <a href='mailto:nathan.wootton1@gmail.com' className='App-appbutton' target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={48} />
            Email
          </a>
          <a href='/Nathan_Resume.pdf' download className='App-appbutton' target="_blank" rel="noopener noreferrer">
            <FaReadme size={48} />
            Resume
          </a>
        </div>
      </div>
      <div>
        <FaBars className='Clickable Nav-bars' size={48} onClick={onClickNav} />
      </div>
    </div>
  )
}
export default NavBar