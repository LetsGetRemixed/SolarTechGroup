import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:2424/inventory');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data from inventory', error);
            setError(error);
            setLoading(false);
        }
    };

    // Fetch a product by ID
    const fetchProductById = async (id) => {
        try {
            const response = await fetch(`http://localhost:2424/inventory/${id}`);
            
            // Check if the response is not HTML (error page)
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format, not JSON");
            }
    
            // If the response is okay, parse the JSON data
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch product');
            }
            return data; // Return the product data
        } catch (error) {
            console.error(`Error fetching product with ID: ${id}`, error);
            return null; // Return null if there's an error
        }
    };
    // Fetch products on component mount
    useEffect(() => {
        fetchProducts(); // Initial fetch of all products
    }, []);

    return {
        products,
        error,
        loading,
        fetchProductById, // Function to get a specific product
    };
};

export default useProducts;