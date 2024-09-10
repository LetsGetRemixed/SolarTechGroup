import React from 'react';
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeaderRoute imageUrl="/images/headerbanner.png" title="Contact Us" />
            <div className="container mx-auto px-4 py-8 bg-white">
            <h1 className="text-3xl font-bold mb-12 text-center">Contact Us</h1>
            
            <div className="flex flex-col md:flex-row justify-between">
                {/* Enhanced Contact Information */}
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0 md:text-left text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
                    <p className="mb-4 mr-8">
                        We are always ready to hear from you! Reach out to us using the following contact details or visit us at our office.
                    </p>

                    {/* Address */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Address</h3>
                        <p>1234 Main Street, City, Country</p>
                    </div>

                    {/* Office Hours */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Office Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Email</h3>
                        <p><a href="mailto:info@company.com" className="text-highlight hover:underline">info@company.com</a></p>
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Phone</h3>
                        <p><a href="tel:+123456789" className="text-highlight hover:underline">+1 234 567 89</a></p>
                    </div>

                    {/* Map Embed */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-4">Find Us</h3>
                        <iframe
                            className="w-full h-48 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509184!2d144.95373531531745!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57760b8f7494ad6!2s1234%20Main%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sau!4v1613973968774!5m2!1sen!2sau"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-8 ">
                        <h3 className="font-semibold mb-4 ">Follow Us</h3>
                        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/icons8-facebook.svg" alt="Facebook" className="w-10 h-10 hover:opacity-75" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/icons8-twitter.svg" alt="Twitter" className="w-10 h-10 hover:opacity-75" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:opacity-75" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/icons8-instagram.svg" alt="Instagram" className="w-10 h-10 hover:opacity-75" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-1/2 w-full bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                    <form>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    placeholder="Your Phone"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Company</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                placeholder="Your Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-highlight text-white py-3 px-6 rounded-lg hover:bg-highlight-dark transition duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Contact;