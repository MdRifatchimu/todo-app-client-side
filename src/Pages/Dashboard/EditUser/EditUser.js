import React, { useEffect, useState } from 'react';

const EditUser = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://fathomless-beach-05738.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);

    const handleShipped = id => {
        const url = `https://fathomless-beach-05738.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                }
            })
    }

    const renderUser = (user, index) => {
        return (
            <tr key="index">
                <td><h4>{user.displayName}</h4></td>
                <td><h4>{user.email}</h4></td>
                <td>{user.status}</td>
                <td>
                 <button className="btn btn-info" onClick={() => handleShipped(user._id)}>UPDATE STATUS</button>
                </td>
            </tr>
        )
    }

    return (
        <div className="container">
            <h1>Edit Users</h1>
            <table class="table table-striped mt-5">
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
    );
};

export default EditUser;