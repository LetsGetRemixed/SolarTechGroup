import React, { useState, useEffect } from 'react';

import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';

const backendURL = process.env.REACT_APP_BACKEND_URL;

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [inventory, setInventory] = useState([]);// State to hold inventory items
    const [currentlyEditing, setCurrentlyEditing] = useState(null); 
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

    

    const [editItem, setEditItem] = useState(null); // State to hold the item being edited

    const fetchInventory = async () => {
        try {
            const response = await fetch(`${backendURL}/inventory`);
            const data = await response.json();
            setInventory(data);
        } catch (error) {
            console.error('Error fetching inventory', error);
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewItem({
                    ...newItem,
                    image: reader.result, // Store the base64 encoded string in the state
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${backendURL}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchInventory();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({
            ...newItem,
            [name]: value
        });
    };

    const handleEditInputChange = (e, itemId) => {
        const { name, value } = e.target;
        setInventory((prevInventory) =>
            prevInventory.map((item) =>
                item._id === itemId ? { ...item, [name]: value } : item
            )
        );
    };

    const handleSaveItem = async (itemId) => {
        const itemToUpdate = inventory.find((item) => item._id === itemId);
    
        try {
            const response = await fetch(`${backendURL}/inventory/updateItem`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemId: itemToUpdate._id,
                    itemName: itemToUpdate.itemName,
                    category: itemToUpdate.category,
                    quantity: itemToUpdate.quantity,
                    price: itemToUpdate.price,
                    dimensions: itemToUpdate.dimensions,
                    features: itemToUpdate.features,
                    image: itemToUpdate.image,
                    description: itemToUpdate.description,
                }),
            });
    
            if (response.ok) {
                const updatedItem = await response.json();
                setInventory((prevInventory) =>
                    prevInventory.map((item) =>
                        item._id === itemId ? updatedItem.updatedItem : item
                    )
                );
                setCurrentlyEditing(null); // Exit edit mode
            } else {
                const errorData = await response.json();
                console.error('Failed to update item:', errorData.message);
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleCancelEdit = () => {
        fetchInventory(); // Re-fetch the inventory to revert changes
        setCurrentlyEditing(null); // Exit edit mode
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendURL}/inventory/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (response.ok) {
                await fetchInventory(); // Re-fetch the inventory list after adding the item
                setNewItem({
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
                const errorData = await response.json();
                console.error('Failed to add item:', errorData.message);
            }
        } catch (error) {
            console.error('Error adding new item', error);
        }
    };

    const handleUpdateItem = async (itemId) => {
        try {
            const response = await fetch(`${backendURL}/inventory/updateItem`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editItem),
            });

            if (response.ok) {
                await fetchInventory(); // Re-fetch the inventory list after updating the item
                setEditItem(null); // Clear the edit form
            } else {
                console.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item', error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        try {
            const response = await fetch(`${backendURL}/inventory/deleteItem/${itemId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                await fetchInventory(); // Re-fetch the inventory list after deleting the item
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item', error);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 font-sans py-8 bg-gray-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Users</h2>
                <ul className="bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8 p-6">
                    {users.map((user) => (
                        <li key={user._id} className="border-b border-gray-700 py-4">
                            <p className="text-lg font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-400">{user.email}</p>
                            <ul className="text-sm text-gray-500">
                                <li>Street: {user.address?.street || 'N/A'}</li>
                                <li>City: {user.address?.city || 'N/A'}</li>
                                <li>Zip: {user.address?.zip || 'N/A'}</li>
                            </ul>
                        </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-6">Inventory</h2>
                <ul className="bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8 p-6">
            {inventory.map((item) => (
                <li key={item._id} className="border-b border-gray-700 py-4">
                    {currentlyEditing === item._id ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Item Name</label>
                                <input
                                    type="text"
                                    name="itemName"
                                    value={item.itemName}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={item.category}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={item.quantity}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={item.price}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Dimensions</label>
                                <input
                                    type="text"
                                    name="dimensions"
                                    value={item.dimensions}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold mb-1">Description</label>
                                <textarea
                                    name="description"
                                    value={item.description}
                                    onChange={(e) => handleEditInputChange(e, item._id)}
                                    className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-4 flex space-x-2">
                            <button
                                    onClick={() => handleSaveItem(currentlyEditing)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancelEdit}
                                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="text-lg font-semibold">{item.itemName}</p>
                            <p className="text-sm text-gray-400">Category: {item.category}</p>
                            <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                            <p className="text-lg font-semibold text-blue-600 mb-4">
                                Price: {item.price != null && typeof item.price === 'number'
                                ? `$${item.price.toFixed(2)}`
                                : 'Contact us for details'}
                            </p>
                            <p className="text-sm text-gray-400">Dimensions: {item.dimensions}</p>
                            <p className="text-sm text-gray-400">Description: {item.description}</p>
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => setCurrentlyEditing(item._id)}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteItem(item._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>

                <h2 className="text-3xl font-bold mb-6">{editItem ? 'Edit Inventory Item' : 'Add New Inventory Item'}</h2>
                <form onSubmit={editItem ? () => handleUpdateItem(editItem._id) : handleAddItem} className="bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <input
                            type="text"
                            name="itemName"
                            value={editItem ? editItem.itemName : newItem.itemName}
                            onChange={editItem ? handleEditInputChange : handleInputChange}
                            placeholder="Item Name"
                            className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            value={editItem ? editItem.category : newItem.category}
                            onChange={editItem ? handleEditInputChange : handleInputChange}
                            placeholder="Category"
                            className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                            required
                        />
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-gray-400 font-bold mb-2">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={editItem ? editItem.quantity : newItem.quantity}
                                onChange={editItem ? handleEditInputChange : handleInputChange}
                                placeholder="Quantity"
                                className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-400 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={editItem ? editItem.price : newItem.price}
                                onChange={editItem ? handleEditInputChange : handleInputChange}
                                placeholder="Price"
                                className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="dimensions"
                            value={editItem ? editItem.dimensions : newItem.dimensions}
                            onChange={editItem ? handleEditInputChange : handleInputChange}
                            placeholder="Dimensions"
                            className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                        />
                        <input
                            type="text"
                            name="features"
                            value={editItem ? editItem.features : newItem.features}
                            onChange={editItem ? handleEditInputChange : handleInputChange}
                            placeholder="Features"
                            className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                        />
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full"
                        />
                    </div>
                    <textarea
                        name="description"
                        value={editItem ? editItem.description : newItem.description}
                        onChange={editItem ? handleEditInputChange : handleInputChange}
                        placeholder="Description"
                        className="border border-gray-600 bg-gray-900 text-white p-2 rounded w-full mt-4"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-800 transition"
                    >
                        {editItem ? 'Update Item' : 'Add Item'}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPage;
