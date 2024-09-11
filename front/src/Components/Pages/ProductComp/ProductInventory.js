import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProducts from './useProducts';


const ProductInventory = () => {
    const { products, loading, error } = useProducts(); // Get products and status
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortOption, setSortOption] = useState('name'); // Default sort by name

    // Sort products whenever the sort option changes
    useEffect(() => {
        if (products.length > 0) {
            let sorted = [...products];
            if (sortOption === 'name') {
                sorted.sort((a, b) => a.itemName.localeCompare(b.itemName));
            } else if (sortOption === 'price') {
                sorted.sort((a, b) => a.price - b.price);
            }
            setSortedProducts(sorted);
        }
    }, [products, sortOption]);

    // Handle sorting option change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products.</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Product Inventory</h1>

            {/* Sorting Dropdown */}
            <div className="mb-6">
                <label htmlFor="sort" className="mr-4 text-lg font-medium">Sort By:</label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
                <Link to={`/products/${product._id}`} key={product._id}>
                    <div className="border p-4 rounded shadow-lg hover:shadow-2xl transition duration-300">
                        <img src={product.imageUrl} alt={product.itemName} className="w-full h-48 object-cover rounded mb-4" />
                        <h2 className="text-xl font-semibold">{product.itemName}</h2>
                        <p className="text-gray-700 mt-2">{product.description}</p>
                        <p className="text-lg font-bold mt-4">${product.price.toFixed(2)}</p>
                    </div>
                </Link>
))}
            </div>
        </div>
    );
};

export default ProductInventory;