import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/HomeComp/Home';
import AboutUS from './Components/Pages/AboutComp/About';
import Contact from './Components/Pages/ContactComp/Contact';
import ScrollToTop from './Components/Pages/UniversalComp/ScrollToTop';
import Privacy from './Components/Pages/PrivacyComp/Privacy';
import ProductList from './Components/Pages/ProductComp/ProductList';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/products" element={<ProductList />} />
        
      </Routes>
    </Router>
  );
}
export default App;

