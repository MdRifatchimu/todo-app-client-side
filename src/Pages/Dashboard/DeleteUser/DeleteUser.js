import React, { useEffect, useState } from 'react';

const DeleteUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-beach-05738.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const renderUser = (user, index) => {
        return (
            <tr key="index">
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td><button className="btn btn-danger" onClick={() => handleDeleteOrders(user._id)}>DELETE</button></td>
            </tr>
        )
    }

    const handleDeleteOrders = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fathomless-beach-05738.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <div>
            <div className="container">
                <h1 className="mb-5">All Users</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subscription Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(renderUser)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteUser;