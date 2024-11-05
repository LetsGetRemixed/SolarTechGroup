
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../HomeComp/Header'
import Navbar from '../UniversalComp/Navbar'
import Footer from '../UniversalComp/Footer'
import AboutUsBlock from '../HomeComp/AboutUsBlock'
import ProductBlock from '../HomeComp/ProductBlock'
import ContactBlock from './ContactBlock';
const Home = () => {
  // Animation variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className='font-Roboto'>
      <Navbar />
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Adjusts when the animation should start (30% of the element in view)
        variants={slideInLeft}
      >
        <ProductBlock />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Adjusts when the animation should start (30% of the element in view)
        variants={slideInRight}
      >
        <AboutUsBlock />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Adjusts when the animation should start (30% of the element in view)
        variants={fadeIn}
      >
        <ContactBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;