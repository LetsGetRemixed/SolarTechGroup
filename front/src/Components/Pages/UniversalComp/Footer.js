import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 backdrop-blur-md text-white font-rajdhani py-10 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">
        
        {/* Left: Logo + Name */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
          <img 
            src="/images/logo1.png" 
            alt="Southern Technologist Group" 
            className="w-14 h-14"
          />
          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-bold leading-tight">Southern</h3>
            <h3 className="text-xl font-bold leading-tight">Technologist Group</h3>
          </div>
        </div>

        {/* Center: Nav + Copyright */}
        <div className="flex flex-col items-center font-exo space-y-3">
          <div className="flex gap-6 text-sm text-gray-300">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Southern Technologist Group. All rights reserved.
          </div>
        </div>

        {/* Right: Admin Link */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <Link to="/wvmdsm3202351md0svjcvao93jm2m50vmd02" className="hover:text-red-400 transition">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


