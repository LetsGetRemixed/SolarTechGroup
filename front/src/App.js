import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Components/Pages/AdminComp/AuthContext';
import PrivateRoute from './Components/Pages/AdminComp/PrivateRoute';
import Home from './Components/Pages/HomeComp/Home';
import AboutUS from './Components/Pages/AboutComp/About';
import Contact from './Components/Pages/ContactComp/Contact';
import ScrollToTop from './Components/Pages/UniversalComp/ScrollToTop';
import Privacy from './Components/Pages/PrivacyComp/Privacy';
import ProductPage from './Components/Pages/ProductComp/ProductsPage';
import AdminPage from './Components/Pages/AdminComp/AdminPage';
import SingleProduct from './Components/Pages/ProductComp/SingleProduct';
import Login from './Components/Pages/AdminComp/Login';

import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (analytics) {
      // Log page view event
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
      
      // Optional: Log custom event for better tracking
      logEvent(analytics, 'screen_view', {
        screen_name: location.pathname
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <AuthProvider>
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/products" element={<ProductPage />} />
        <Route exact path="/wvmdsm3202351md0svjcvao93jm2m50vmd02" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute element={AdminPage} />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        
        
      </Routes>
    </Router>
    </AuthProvider>
  );
}
export default App;

