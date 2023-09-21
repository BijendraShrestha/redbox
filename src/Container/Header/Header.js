import React from 'react'

import SubHeading from '../../Components/SubHeading/SubHeading'
import '../Header/header.scss'
function Header() {
  return (
    <>
      <section id="home">
        <div className="container header-container">
          <div className="row flex header-row">
            <div className="col-lg-6 header-left">
              <SubHeading title="Chase the new taste" />
              <h1 className="header-h1">New Ways to taste</h1>
              <p className='header-p'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
              <button type="button" className='custom-button'>I'm Hungry</button>
              <button type="button" className='custom-button'>Show me more</button>
            </div>
            <div className="col-lg-6">
              <img src={require('../../assets/hero.png')} alt="hero-banner" className='hero-img'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
