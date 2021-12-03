import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import PayPal from '../PayPal/PayPal';

const Subscription = () => {
    const [checkout, setCheckout] = useState(false);

    return (
        <div>
            <Navigation></Navigation>
            <div style={{ marginTop: '8%' }} className="container w-50">

                {
                    checkout ?
                        <div>
                            <PayPal></PayPal>
                            <h5 style={{ cursor: 'pointer' }} className="text-primary" onClick={() => {
                                setCheckout(false)
                            }}>Back to Subscription</h5>
                        </div> :
                        <div>
                            <h1 className="mb-5">Subscription</h1>
                            <div class="card w-75 m-auto">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Premium Package</h5>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sed nemo veniam distinctio, hic consequuntur totam nesciunt ea pariatur velit, enim quia atque debitis deserunt nisi nobis dolorem omnis? Illum.</p>
                                    <h5>Price : $5</h5>
                                    <button onClick={() => {
                                        setCheckout(true)
                                    }} class="btn btn-primary">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default Subscription;