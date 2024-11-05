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
        <div
        className="relative py-16 font-Roboto bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/screens.jpg")' }}
      >
        {/* Stronger Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-12">
          <div className="flex items-center py-8 justify-center">
            {/* Left Line */}
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-yellow-500 animate-pulse mr-4"></span>
      
            {/* Title with Glow Effect and Shadow */}
            <h2 className="text-5xl font-Poppins font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 drop-shadow-lg shadow-black shadow-md">
              HOT PRODUCTS
            </h2>
      
            {/* Right Line */}
            <span className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 via-orange-500 to-transparent animate-pulse ml-4"></span>
          </div>
      
          {/* Product Grid with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {products.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className="relative overflow-hidden border border-gray-600 rounded-lg shadow-lg bg-gray-900 bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.4)]">
                  {/* Product Image */}
                  <img
                    src={product.image || '/images/default-product.png'}
                    alt={product.itemName}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
      
                  {/* Product Details */}
                  <div className="p-4 text-white bg-gray-800 bg-opacity-70 rounded-b-lg">
                    <h3 className="text-xl font-semibold">{product.itemName}</h3>
                    <p className="text-gray-300 mt-2">{product.description}</p>
                    <p className="text-lg font-bold mt-4">
                      {product.price != null && typeof product.price === 'number'
                        ? `$${product.price.toFixed(2)}`
                        : 'Contact us for details'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      
          {/* View All Products Button with Enhanced Gradient and Shadow */}
          <div className="text-center mt-12">
            <Link to="/products">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-yellow-500 hover:to-orange-500 hover:shadow-xl transition duration-300">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    );
};

export default ProductBlock;
