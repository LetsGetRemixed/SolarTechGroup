import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from './useProducts'; // Import your hook to fetch products

const SingleProduct = () => {
    const { productId } = useParams(); // Get the product ID from the URL
    const { fetchProductById } = useProducts(); // Fetch a specific product by ID
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the product details when the component mounts
    useEffect(() => {
        const getProduct = async () => {
            try {
                const productData = await fetchProductById(productId);
                setProduct(productData);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch product details:', err);
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };
        getProduct();
    }, [productId, fetchProductById]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>No product found.</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{product.itemName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <img
                    src={product.imageUrl}
                    alt={product.itemName}
                    className="w-full h-64 object-cover rounded-lg"
                />
                
                {/* Product Details */}
                <div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-lg font-bold mb-4">Price: ${product.price.toFixed(2)}</p>
                    
                    {/* You can add more details such as stock, categories, etc. */}
                    <p className="text-md text-gray-600">Category: {product.category}</p>
                    <p className="text-md text-gray-600">Available Stock: {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;