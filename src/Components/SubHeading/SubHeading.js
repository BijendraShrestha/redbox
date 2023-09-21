import React from 'react'


function SubHeading({title}) {
  return (
    <div className="sub-flavor fs-3 py-3 fw-light" >
      <p className="p-subHeading">{title}</p>
      <img src={require('../../assets/chopsticks.png')} alt="chopsticks" className='chopsticks-img ' />
    </div>
  )
}

export default SubHeading
