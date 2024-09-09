
import React from 'react';
import Header from '../HomeComp/Header'
import Navbar from '../UniversalComp/Navbar'
import Footer from '../UniversalComp/Footer'
import AboutUsBlock from '../HomeComp/AboutUsBlock'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      Products and about
      <AboutUsBlock />
      <Footer />

     
    </div>
  );
};
export default Home;