import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/HomeComp/Home';
import AboutUS from './Components/Pages/AboutComp/About';
import Contact from './Components/Pages/ContactComp/Contact';
import ScrollToTop from './Components/Pages/UniversalComp/ScrollToTop';
import Privacy from './Components/Pages/PrivacyComp/Privacy';
import ProductPage from './Components/Pages/ProductComp/ProductsPage';
import AdminPage from './Components/Pages/AdminComp/AdminPage';
import SingleProduct from './Components/Pages/ProductComp/SingleProduct';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        
        
      </Routes>
    </Router>
  );
}
export default App;

