
import React from 'react';
import Header from '../HomeComp/Header'
import Navbar from '../UniversalComp/Navbar'
import Footer from '../UniversalComp/Footer'
import AboutUsBlock from '../HomeComp/AboutUsBlock'
import ProductBlock from '../HomeComp/ProductBlock'
const Home = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Header />
      <ProductBlock />
      <AboutUsBlock />
      <Footer />

     
    </div>
  );
};
export default Home;