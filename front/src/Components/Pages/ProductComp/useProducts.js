import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${backendURL}/inventory`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Invalid response format, not JSON");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data from inventory', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts(); // Initial fetch of all products
    }, [backendURL]);  

    // Fetch a product by ID
    const fetchProductById = async (id) => {
        try {
            const response = await fetch(`${backendURL}/inventory/${id}`);
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format, not JSON");
            }
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch product');
            }
            return data;
        } catch (error) {
            console.error(`Error fetching product with ID: ${id}`, error);
            return null;
        }
    };

    // Fetch products by category
    const fetchProductsByCategory = async (category) => {
        try {
            const response = await fetch(`${backendURL}/inventory?category=${encodeURIComponent(category)}`);
            const contentType = response.headers.get("content-type");
            if (!response.ok) {
                const errorText = await response.text(); // Get the error response as text
                throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
            }
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format, not JSON");
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching products for category: ${category}`, error);
            return [];
        }
    };

    return {
        products,
        error,
        loading,
        fetchProductById,
        fetchProductsByCategory,
    };
};

export default useProducts;
