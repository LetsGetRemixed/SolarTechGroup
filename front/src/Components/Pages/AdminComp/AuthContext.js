import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to login (set authentication to true)
    const login = () => {
        setIsAuthenticated(true);
    };

    // Function to logout (set authentication to false)
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
