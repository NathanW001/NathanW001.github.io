import React from 'react'

function AppBox({ imagePath, appLink, appTitle }) {
  return (
    <a  className="App-applink" href={appLink} target="_blank" rel="noopener noreferrer">
      <div className='App-appbox' style={{ 'backgroundImage': 'url("' + String(imagePath) + '")'}}>
          <span className='App-applinkname'>{appTitle}</span>
      </div>
    </a>
  )
}
export default AppBox