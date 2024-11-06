import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className=" py-12" 
        style={{ backgroundImage: 'url("/images/whitebackground.jpg")' }}
        >
            <div className="container mx-auto flex font-Roboto flex-col md:flex-row items-center">
                {/* Left Side - Image */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img 
                        src="/images/TESTLED-2.jpg" 
                        alt="About Our Company" 
                        className="w-full h-auto rounded-lg shadow-lg border-2 border-primary"
                    />
                </div>

                {/* Right Side - Title, Description, Button */}
                <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h2>
                    <p className="text-gray-800 mb-6 mx-4 sm:mx-0 text-xl">
                        We are committed to providing exceptional services and products that deliver outstanding results. 
                        Our team is dedicated to innovation, efficiency, and ensuring customer satisfaction. Learn more about 
                        our story and values that drive our company forward every day.
                    </p>
                    <Link to="/about" className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-highlight transition duration-300">
                        More Info
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;