import React, { useEffect, useRef, useState } from 'react';
import { actions } from 'react-table';
import useAuth from '../../Hooks/useAuth';

const PayPal = () => {
    const [dbUsers, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-beach-05738.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const paypal = useRef();
    const { user } = useAuth();

    const currentUser = dbUsers.filter(dbuser => dbuser.email === user.email);
    let result = currentUser.map(a => a._id);

    const paid = () => {
        alert("Thank you for subscribe");
        const url = `http://localhost:5000/users/${result[0]}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dbUsers)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                }
            })
    }

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Subscription",
                            amount: {
                                currency_code: "USD",
                                value: 5
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await (actions.order.capture)
                paid();
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <h1>Paypal</h1>
            <div ref={paypal}></div>
        </div>
    );
};

export default PayPal;