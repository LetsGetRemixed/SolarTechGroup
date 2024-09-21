import React, { useState } from 'react';

const ProductContact = ({ productName, productId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState(`Inquiry about ${productName}`);
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Example form submission logic (could use EmailJS or your backend API)
        try {
            // Here you would replace this with your actual email sending logic
            // For example, using EmailJS or sending to your backend:
            // await emailService.send({
            //     name, email, phone, company, subject, message, productId
            // });

            setFormStatus('Message sent successfully!');
            // Clear form fields after submission
            setName('');
            setEmail('');
            setPhone('');
            setCompany('');
            setSubject(`Inquiry about ${productName}`);
            setMessage('');
        } catch (error) {
            console.error('Failed to send message:', error);
            setFormStatus('Failed to send message. Please try again later.');
        }
    };

    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneLength = phoneNumber.length;

        if (phoneLength < 4) return phoneNumber;
        if (phoneLength < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };

    return (
        <div className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us About {productName}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Your Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Your Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="(123) 456-7890"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Your Company</label>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your company name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        readOnly
                        className="w-full p-3 border rounded bg-gray-100 cursor-not-allowed shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">Your Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        rows="5"
                        placeholder="Enter your message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-highlight text-white font-bold py-3 px-6 rounded shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50"
                >
                    Send Message
                </button>
                {formStatus && <p className="mt-6 text-center text-green-600 text-lg font-semibold">{formStatus}</p>}
            </form>
        </div>
    );
};

export default ProductContact;

