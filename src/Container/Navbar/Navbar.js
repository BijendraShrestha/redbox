import React from 'react'
import '../Navbar/navbar.scss'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="home">
      <img src={require('../../assets/logo.png')} alt="logo" className='logo-img'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <a className="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Photo Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cities">Our Cities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div> 
  </div>
</nav>

    </>
  )
}

export default Navbar
