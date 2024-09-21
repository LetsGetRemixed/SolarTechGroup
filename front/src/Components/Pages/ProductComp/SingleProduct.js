import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from './useProducts'; // Import your hook to fetch products
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';
import ProductContact from './ProductContact';
import ImageModal from './ImageModal';

const SingleProduct = () => {
    const { productId } = useParams(); // Get the product ID from the URL
    const { fetchProductById } = useProducts(); // Fetch a specific product by ID
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const handleImageClick = (image) => {
        setCurrentImage(image);
    };

    const handleExpandClick = () => {
        setIsModalOpen(true); // Open the modal when the image is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };


    return (
        <div>
            <Navbar />
            <HeaderRoute 
                imageUrl="/images/headerbanner.png" 
                title="Product Details" 
                productName={product.itemName} 
            />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Main Product Image */}
                        <div className="relative">
                            <img
                                src={currentImage}
                                alt={product.itemName}
                                className="w-full h-96 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                                onClick={handleExpandClick}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-6">
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.itemName}</h1>
                            <p className="text-lg font-semibold text-blue-600 mb-4">Price: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                            <p className="text-md text-gray-600 mb-4"><strong>Category:</strong> {product.category || 'N/A'}</p>
                            <p className="text-md text-gray-600 mb-4"><strong>Available Stock:</strong> {product.quantity || 'N/A'}</p>
                            <p className="text-md text-gray-600 mb-4"><strong>Dimensions:</strong> {product.dimensions || 'N/A'}</p>

                            {product.features && product.features.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Features:</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="text-gray-700">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <p className="mt-6 text-gray-700">{product.description}</p>
                        </div>
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex space-x-4 mt-4 p-4 overflow-x-auto">
                        {product.images && product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.itemName} thumbnail ${index + 1}`}
                                className={`w-24 h-24 object-cover cursor-pointer rounded ${currentImage === image ? 'ring-2 ring-primary' : 'ring-1 ring-gray-300'}`}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-12">
                    <ProductContact productName={product.itemName} productId={product._id} />
                </div>
            </div>
            <Footer />

            {/* Image Modal */}
            <ImageModal image={currentImage} isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default SingleProduct;