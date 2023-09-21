import React from 'react'
import '../FindUs/findus.scss'
import SubHeading from '../../Components/SubHeading/SubHeading'
function FindUs() {
  return (
    <section id="contact">
      <div className="container find-container py-5">
        <div className="row">
            <div className="col-lg-6 find-left">
                <SubHeading title="Contact Us" />
                <h1 className="find-h1">Find Us</h1>
                <p className="find-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officia.</p>
                <h3 className="find-hour">Opening Hours</h3>
                <p className="find-time">Mon - Fri: 10:00 am - 02:00 am</p>
                <p className="find-time">Sat - Sun: 10:00 am - 02:00 am</p>
            </div>

            <div className="col-lg-6 find-right">
                <img src={require('../../assets/find-us.jpg')} alt="" className='img-fluid find-img' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs
