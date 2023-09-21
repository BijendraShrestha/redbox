import React from 'react';
import './aboutus.scss';
import {BiTime} from 'react-icons/bi';
import {FaStopwatch20} from 'react-icons/fa';
import {FaCarrot} from 'react-icons/fa';
import {BsFillCartCheckFill} from 'react-icons/bs';

function AboutUs() {
  return (
    <div className='container aboutUs-container py-3' id="about-us">
      <div className='aboutUs-fast text-center'>
        <h1 className='aboutUs-h1'>Get the Food Fast as it can gets</h1>
        <img src={require('../../assets/chopsticks.png')} alt="" />
        <p className='aboutUs-p text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, laborum magni repellendus ex rem voluptatibus distinctio in ratione reprehenderit quos sed aliquid ab quod similique</p>
      </div>

      <div className="row py-3">
        <div className="col-lg-3 about-content card flex ">
        <BiTime size="5rem" color="#FF6B4A"/>
        <h3 className='about-content-h3'>UP TO 365 DAYS/YEAR</h3>
        <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style that's your style</p>
        </div>

        <div className="col-lg-3 about-content card flex">
        <FaStopwatch20 size="5rem" color="#FF6B4A"/>
        <h3 className='about-content-h3'>READY IN 20 MINUTES</h3>
        <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
        </div>

        <div className="col-lg-3 about-content card flex">
        <FaCarrot size="5rem" color="#FF6B4A"/>
        <h3 className='about-content-h3'>100% ORGANIC</h3>
        <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
        </div>

        <div className="col-lg-3 about-content card flex">
        <BsFillCartCheckFill size="5rem" color="#FF6B4A"/>
        <h3 className='about-content-h3'>ORDER ANYTHING</h3>
        <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutUs
