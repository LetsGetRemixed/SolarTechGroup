import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/HomeComp/Home';
import AboutUS from './Components/Pages/AboutComp/About';
import Contact from './Components/Pages/ContactComp/Contact';
import ScrollToTop from './Components/Pages/UniversalComp/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}
export default App;

