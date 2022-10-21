import React from 'react'

function Body() {
  return (
    <div className='App-body'>
        <div className='Flexbox-body'>
          <div>
            <h1 id="aboutMe">Who Am I?</h1>
            <p className='Body-paragraph'>Hi, nice to meet you! My name is Nathan Wootton, and I'm an undergraduate student in my 3rd year at the University of Toronto's St. George Campus.  I'm currently pursuing a specialist in computer science, and am also an ambitious developer.  Some of my hobbies include programming, playing the saxophone, gardening cacti, and playing/competing in video games.</p>
            <p className='Body-paragraph'>Recently, I've been focusing primarily on school, but I've also been working on some projects on the side, including this website, which I've worked on from scratch using CSS, HTML and React.</p>
          </div>
          <div className='Image-wrapper'>
            <img src={"/images/nathan.jpg"} alt="Nathan"/>
          </div>
        </div>
    </div>
  )
}
export default Body