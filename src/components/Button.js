import React from 'react'

function Button({ onClickButton, buttonText }) {
  return (
    <div className='Button'>
      <h2 onClick={onClickButton}>{buttonText}</h2>
    </div>
  )
}
export default Button