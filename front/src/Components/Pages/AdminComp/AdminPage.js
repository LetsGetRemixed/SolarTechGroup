import React, { useState, useEffect } from 'react';

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:2424/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fecthing users', error);
            }
        };
        fetchUsers();
    }, []);

  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user._id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <ul>
                        <li>Street: {user.address?.street || 'N/A'}</li>
                        <li>City: {user.address?.city || 'N/A'}</li>
                        <li>Zip: {user.address?.zip || 'N/A'}</li>
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AdminPage;