import './App.css';
import NavBar from './components/NavBar';
import ExpandedNav from './components/ExpandedNav'
import Body from './components/Body';
import React, { useState } from 'react'
import Header from './components/Header';
import MyApps from './components/MyApps';
// import Contact from './components/Contact';


function App() {
  const [showNavBar, setShowNavBar] = useState(false)

  // console.log(showNavBar)

  return (
    <div className="App">
      {showNavBar ? (<ExpandedNav onClickNav={() => setShowNavBar(!showNavBar)}/>) : (< NavBar onClickNav={() => setShowNavBar(!showNavBar)}/>)}
      <Header/>
      <Body/>
      <MyApps/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
