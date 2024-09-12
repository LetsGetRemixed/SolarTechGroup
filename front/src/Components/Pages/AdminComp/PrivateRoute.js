import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Use the AuthContext

const PrivateRoute = ({ element: Element }) => {
    const { isAuthenticated } = useAuth();

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the requested component
    return <Element />;
};

export default PrivateRoute;
