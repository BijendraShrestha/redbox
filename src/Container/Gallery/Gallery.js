import React from 'react'
import '../Gallery/gallery.scss'
import SubHeading from '../../Components/SubHeading/SubHeading'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Gallery() {

    const options = {
        // loop: true,
        // center: true,
        // items: 3,
        // margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5500,
        // smartSpeed: 450,
        // nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    };
      

  return (
    <section id="gallery">
        <div className="container gallery-container container-xl">
            <div className="row">
                <div className="col-lg-3 gallery-left">
                    <SubHeading title="Instragram" />
                    <h1 className='gallery-h1'>Photo Gallery</h1>
                    <p className="gallery-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, laboriosam facere! Facere eveniet in autem vitae accusamus ducimus praesentium soluta necessitatibus corporis excepturi, nihil consequatur.</p>
                    <button type="button" className='custom-button'>View More</button>
                </div>

                <div className="col-lg-9 gallery-right">
                <OwlCarousel className='owl-theme' loop margin={10} nav items={4} {...options}>
                    <div className='card'>
                        <img src={require('../../assets/gallery-01.jpg')} alt="gallery-01" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src={require('../../assets/gallery-02.jpg')} alt="gallery-02" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src={require('../../assets/gallery-03.jpg')} alt="gallery-03" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src={require('../../assets/gallery-04.jpg')} alt="gallery-04" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src={require('../../assets/gallery-05.jpg')} alt="gallery-05" className='w-100' />
                    </div>
                </OwlCarousel>    
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Gallery
