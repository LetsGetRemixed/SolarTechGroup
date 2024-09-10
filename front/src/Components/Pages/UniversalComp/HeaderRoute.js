import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderRoute = ({ imageUrl, title }) => {
    const location = useLocation();

    // Split the current path into an array of strings to create the breadcrumb links
    const breadcrumbs = location.pathname.split('/').filter((path) => path);

    return (
        <header className="relative bg-transparent mb-0">
            {/* Header Image */}
            <div className="relative w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Optional overlay */}

                {/* Breadcrumb Navigation */}
                <div className="absolute bottom-0 left-0 w-full z-20">
                    <div className="container mx-auto py-2 w-full max-w-none">
                        <div className="text-md text-gray-200 bg-black bg-opacity-50 text-center px-4 sm:py-4 py-2 rounded-md">
                            <Link to="/" className="text-highlight hover:underline">Home</Link>
                            {breadcrumbs.length > 0 && breadcrumbs.map((crumb, index) => {
                                const pathTo = `/${breadcrumbs.slice(0, index + 1).join('/')}`;

                                return (
                                    <span key={index}>
                                        {' / '}
                                        <Link to={pathTo} className="text-highlight hover:underline capitalize">
                                            {crumb.replace('-', ' ')} {/* Converts dashes in URL to spaces */}
                                        </Link>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderRoute;