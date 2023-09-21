import React from 'react'
import '../Footer/footer.scss'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <section className='footer-section'>
      <div className="container footer-container">
        <div className="row footer-row  py-5">
            <div className="col-lg-3 footer-left">
                <h3 className="footer-h3">Contact Us</h3>
                <p className='footer-p'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                <span>Moble no: 987654321</span>
                
            </div>
            
            <div className="col-lg-6 footer-mid">
                <img src={require('../../assets/logo.png')} alt="logo" className='w-50'/>
                <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                <div className="social">
                    <FaFacebookF />
                    <BsInstagram padding='16px'/>
                    <AiOutlineTwitter />

                </div>
            </div>

            <div className="col-lg-3 footer-right ">
            <h3 className="footer-h3">Working Hours</h3>
            <h5>Monday - Friday</h5>
            <p>08:00am - 12:00 am</p>
            <h5>Monday - Friday</h5>
            <p>08:00am - 12:00 am</p>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
