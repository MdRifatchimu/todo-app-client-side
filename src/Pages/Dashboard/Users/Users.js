import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Users = () => {
    const [users, setUsers] = useState([]);
    const {user} = useAuth();
    const history = useHistory();
    useEffect(() => {
        fetch(`https://fathomless-beach-05738.herokuapp.com/users?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            else if (res.status === 401) {
                history.push('/');

                
            }

        })
        .then(data => setUsers(data));
    }, []);

    const renderUser = (auser, index) => {
        return (
            <tr key="index">
                <td>{auser.displayName}</td>
                <td>{auser.email}</td>
                <td>{auser?.status}</td>
            </tr>
        )
    }
    console.log(users)
    console.log(user.email)
    return (
        <div className="container">
            <h1 className="mb-5">All Users</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subscription Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderUser)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;