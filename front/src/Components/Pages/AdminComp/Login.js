import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Access login function from AuthContext
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login request to backend
            const response = await fetch(`${backendURL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token); // Set authentication state to true
                navigate('/admin'); // Redirect to admin page
            } else {
                setError(data.message || 'Invalid login credentials');
            }
        } catch (err) {
            setError('Error logging in. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Login;
