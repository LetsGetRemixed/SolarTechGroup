import React from 'react';
import { Link } from 'react-router-dom';

const ContactBlock = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white py-12 px-6 md:px-12 lg:px-24 shadow-lg my-0">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    Have Any Questions or Want to Order?
                </h2>
                <p className="text-lg mb-8">
                    We're here to help! Whether you have questions about our products or are ready to place an order, don't hesitate to reach out. Our team is always ready to assist you in finding the perfect solution.
                </p>
                <Link to="/contact">
                    <button className="bg-primary hover:bg-highlight text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        Contact Us Now
                    </button>
                </Link>
            </div>
        </div>
       
    );
};

export default ContactBlock;
