import React, { useState, useEffect } from 'react';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [inventory, setInventory] = useState([]); // State to hold inventory items
    const [newItem, setNewItem] = useState({ // State for new item form
        itemName: '',
        category: '',
        quantity: 0,
        price: 0,
        dimensions: '',
        features: '',
        image: '',
        description: ''
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:2424/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        const fetchInventory = async () => {
            try {
                const response = await fetch('http://localhost:2424/inventory');
                const data = await response.json();
                setInventory(data);
            } catch (error) {
                console.error('Error fetching inventory', error);
            }
        };

        fetchUsers();
        fetchInventory(); // Fetch inventory items
    }, []);

    // Function to handle input changes for the new item form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({
            ...newItem,
            [name]: value
        });
    };

    // Function to handle adding a new inventory item
    const handleAddItem = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:2424/inventory/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (response.ok) {
                const newItemData = await response.json();
                setInventory([...inventory, newItemData]);
                setNewItem({ // Reset form after submission
                    itemName: '',
                    category: '',
                    quantity: 0,
                    price: 0,
                    dimensions: '',
                    features: '',
                    image: '',
                    description: ''
                });
            } else {
                console.error('Failed to add item');
            }
        } catch (error) {
            console.error('Error adding new item', error);
        }
    };

    // Function to handle updating an existing inventory item
    const handleUpdateItem = async (itemId, updatedQuantity) => {
        try {
            const response = await fetch('http://localhost:2424/inventory/updateQuantity', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemName: itemId, addedQuantity: updatedQuantity }),
            });

            if (response.ok) {
                const updatedItem = await response.json();
                setInventory(inventory.map(item => item._id === updatedItem.updatedItem._id ? updatedItem.updatedItem : item));
            } else {
                console.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Users</h2>
            <ul className="bg-white shadow overflow-hidden sm:rounded-lg mb-8 p-6">
                {users.map((user) => (
                    <li key={user._id} className="border-b border-gray-200 py-4">
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <ul className="text-sm text-gray-500">
                            <li>Street: {user.address?.street || 'N/A'}</li>
                            <li>City: {user.address?.city || 'N/A'}</li>
                            <li>Zip: {user.address?.zip || 'N/A'}</li>
                        </ul>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">Inventory</h2>
            <ul className="bg-white shadow overflow-hidden sm:rounded-lg mb-8 p-6">
                {inventory.map((item) => (
                    <li key={item._id} className="border-b border-gray-200 py-4">
                        <p className="text-lg font-semibold">{item.itemName}</p>
                        <p className="text-sm text-gray-600">Category: {item.category}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-600">Dimensions: {item.dimensions}</p>
                        <p className="text-sm text-gray-600">Description: {item.description}</p>
                        <div className="mt-4 flex space-x-2">
                            <button 
                                onClick={() => handleUpdateItem(item.itemName, 1)}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            >
                                Add One
                            </button>
                            <button 
                                onClick={() => handleUpdateItem(item.itemName, -1)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Remove One
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">Add New Inventory Item</h2>
            <form onSubmit={handleAddItem} className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <input
                        type="text"
                        name="itemName"
                        value={newItem.itemName}
                        onChange={handleInputChange}
                        placeholder="Item Name"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        value={newItem.category}
                        onChange={handleInputChange}
                        placeholder="Category"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={newItem.quantity}
                        onChange={handleInputChange}
                        placeholder="Quantity"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={newItem.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="dimensions"
                        value={newItem.dimensions}
                        onChange={handleInputChange}
                        placeholder="Dimensions"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="features"
                        value={newItem.features}
                        onChange={handleInputChange}
                        placeholder="Features"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="image"
                        value={newItem.image}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
                <textarea
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className="border border-gray-300 p-2 rounded w-full mt-4"
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default AdminPage;
