import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:2424/inventory');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetchiong data from inventory', error);
            }
        };
        fetchProducts();
    }, []); // Only fetch products once

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h5>{product.itemName}</h5>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;