import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark py-8 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                {/* Logo and Company Name */}
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-start md:text-left">
                <img  
                        src="/STGLogo.png" 
                        alt="Southern Technologist Group" 
                        className="w-12 h-12 mt-4 md:mt-0 md:ml-4 mx-4"
                    />
                    <div className="text-xl font-bold">
                        <span className="block">Southern</span>
                        <span className="block">Technologist Group</span>
                    </div>
                    
                </div>

                {/* Footer Links */}
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
                    <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
                    <Link to="/services" className="hover:text-gray-300 transition duration-300">Services</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
                    <Link to="/privacy" className="hover:text-gray-300 transition duration-300">Privacy Policy</Link>
                </div>

                {/* Admin Dashboard Link */}
                <div className="flex justify-center md:justify-end">
                    <Link to="/login" className="text-sm hover:text-gray-400 transition duration-300">
                        Admin Dashboard
                    </Link>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Southern Technologist Group. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
