//Make a component for an about page

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';

const About = () => {
    return (
        <div>
            <Navbar />
            <HeaderRoute imageUrl="/images/headerbanner.png" title="About Us" /> 
        <section className="bg-gray-100 py-12">
            {/* Hero Section */}
            <div className="container mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Company</h1>
                <p className="text-gray-600 text-lg">
                    At the forefront of LED technology, we are dedicated to bringing energy-efficient lighting solutions that 
                    inspire and illuminate. Learn more about our mission, values, and how we’re shaping the future of lighting.
                </p>
            </div>

           {/* Company Story Section */}
                <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img 
                            src="/images/TESTourteam.png" 
                            alt="Our Story" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Right Side - Story Text */}
                    <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                        <p className="text-gray-600">
                            Founded with a vision to revolutionize the lighting industry, our company has grown from a small start-up
                            to a market leader in LED innovation. From humble beginnings, we've expanded our product range and reach, 
                            continually improving our technology to meet the demands of tomorrow. Our commitment to sustainability 
                            and energy efficiency drives us to create lighting solutions that not only save energy but also inspire creativity 
                            in homes and businesses across the world.
                        </p>
                    </div>
                </div>

                {/* Vision and Mission Section */}
                <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
                    {/* Left Side - Mission Text */}
                    <div className="md:w-1/2 md:pr-8 order-last md:order-first text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission and Vision</h2>
                        <p className="text-gray-600">
                            Our mission is to lead the global lighting industry with cutting-edge LED technology that saves energy, 
                            enhances environments, and creates possibilities for the future. We believe that lighting should be both 
                            practical and beautiful, helping to reduce carbon footprints while providing superior performance.
                            Our vision is a world where LED lighting solutions are not just the better option, but the only option.
                            We strive to make LED lighting accessible to everyone, from residential customers to large-scale commercial enterprises.
                        </p>
                    </div>
                    {/* Right Side - Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img 
                            src="/images/TESTourmission.jpg" 
                            alt="Our Mission" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

            {/* Team and Values Section */}
            <div className="container mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                    At the heart of our company is a passionate team of innovators, designers, and engineers dedicated to making 
                    a difference. Our diverse and talented team shares a common goal: to push the boundaries of LED technology 
                    and deliver lighting solutions that are second to none.
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                        <img 
                            src="/images/TESTmember2.jpg" 
                            alt="Team Member 1" 
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
                        <p className="text-gray-600 text-center">CEO & Founder</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                        <img 
                            src="/images/TESTmember1.jpg" 
                            alt="Team Member 2" 
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 text-center">Jane Smith</h3>
                        <p className="text-gray-600 text-center">Lead Engineer</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                        <img 
                            src="/images/TESTmember3.jpg" 
                            alt="Team Member 3" 
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 text-center">Sarah Lee</h3>
                        <p className="text-gray-600 text-center">Chief Designer</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                        <img 
                            src="/images/TESTmember4.jpg" 
                            alt="Team Member 4" 
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 text-center">Tom Brown</h3>
                        <p className="text-gray-600 text-center">Marketing Head</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Learn More?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Our story is still being written, and we invite you to be part of it. Discover how our products and services can 
                    transform your space with high-quality LED solutions that are sustainable, reliable, and beautifully crafted.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-highlight transition duration-300">
                    Contact Us
                </Link>
            </div>
        </section>
        <Footer/>
        </div>
    );
};

export default About;