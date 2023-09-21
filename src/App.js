
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Container/Navbar/Navbar';
import Header from './Container/Header/Header';
import AboutUs from './Container/AboutUs/AboutUs';
import Gallery from './Container/Gallery/Gallery';
import FindUs from './Container/FindUs/FindUs';
import Footer from './Container/Footer/Footer';

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <AboutUs />
     <Gallery />
     <FindUs />
     <Footer />
    </>
  );
}

export default App;
