import React from 'react'
import AppBox from './AppBox.js'

function MyApps() {
  return (
    <div id='MyApps' className='App-myapps'>
        <h1>My Projects</h1>
        <div className='Flexbox-myapps'>
          <AppBox appTitle='Checkers Program' appLink='https://github.com/NathanW001/CSC111Checkers' imagePath='/images/checkers.jpg'/>
          <AppBox appTitle='Sous-Chef App' appLink='https://github.com/CSC207-UofT/course-project-hivemind' imagePath='/images/vegetables.jpg'/>
          <AppBox appTitle='UTM eSports Hackathon Bot' appLink='https://github.com/Serpikmin/UTMEsportsBot' imagePath='/images/strive-bot.jpg'/>
        </div>
    </div>
  )
}
export default MyApps