import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../ProductComp/useProducts'; // Assuming this hook fetches products

const ProductBlock = () => {
    const { fetchProductsByCategory } = useProducts(); // Destructure the new fetch function
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHotProducts = async () => {
            try {
                const indoorProducts = await fetchProductsByCategory('Indoor LED Display');
                const outdoorProducts = await fetchProductsByCategory('Outdoor LED Display');
                const transparentProducts = await fetchProductsByCategory('Transparent LED Display');

                // Combine the products from the three categories
                const combinedProducts = [
                    ...indoorProducts,
                    ...outdoorProducts,
                    ...transparentProducts
                ];

                setProducts(combinedProducts); // Update the state with combined products
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        getHotProducts();
    }, [fetchProductsByCategory]); // Ensure this runs when the hook function changes

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent animate-gradient-xy bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                Hot Products
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-1 text-3xl animate-pulse">🔥</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link to={`/products/${product._id}`} key={product._id}>
                        <div className="border p-4 border-primary rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <img
                                src={product.image || '/images/default-product.png'}
                                alt={product.itemName}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-semibold">{product.itemName}</h3>
                            <p className="text-gray-700 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-4">${product.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link to="/products">
                    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-highlight transition duration-300">
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductBlock;
