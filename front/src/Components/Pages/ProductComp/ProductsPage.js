import React from 'react';
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';
import ProductInventory from './ProductInventory';

const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <HeaderRoute imageUrl="/images/headerbanner.png" title="About Us" /> 
            <ProductInventory />
            <Footer />
        </div>
    );
};

export default ProductsPage;