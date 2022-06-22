import './App.css';
import NavBar from './components/NavBar';
import ExpandedNav from './components/ExpandedNav'
import { useState } from 'react'

function App() {
  const [showNavBar, setShowNavBar] = useState(false)

  // console.log(showNavBar)

  return (
    <div className="App">
      {showNavBar ? (<ExpandedNav onClickNav={() => setShowNavBar(!showNavBar)}/>) : (< NavBar onClickNav={() => setShowNavBar(!showNavBar)}/>)}
      <header className="App-header">
        <h1>Hi, my name is Nathan</h1>
        <h2>and this is my website.</h2>
      </header>
      <div className='App-body'>
          <div className='Flexbox-body'>
            <div>
              <h1>Who Am I?</h1>
              <p className='Body-paragraph'>My name is Nathan Wootton. I'm an undergraduate in my 3rd year at the University of Toronto's St. George Campus. I am currently pursuing a specialist in computer science, and am an ambitious developer.  Some of my hobbies include programming, playing the saxophone, taking care of cacti and succulents, and playing and competing in video games.</p>
              <p className='Body-paragraph'>Me when when you when you r mom</p>
            </div>
            <div className='Image-wrapper'>
              <img src={require("./images/nathan.jpg")} alt="Nathan"/>
            </div>
          </div>
      </div>
      <div className >

      </div>
    </div>
  );
}

export default App;
