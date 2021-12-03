import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signup.css';

const Signup = () => {
    const [signUpData, setSignUpData] = useState({});
    const { user, signupUser, isLoading, authError } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newsignUpData = { ...signUpData };
        newsignUpData[field] = value;
        setSignUpData(newsignUpData);
    }
    const handleSubmit = e => {
        e.preventDefault();
        signupUser(signUpData.name, signUpData.email, signUpData.password, location, history);
        if(user.email) {
            alert('Succeffuly Signup');
        }
    }
    return (
        <div>
        <div class="center">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div class="txt_field">
                    <input type="text" onBlur={handleOnChange} name="name" required/>
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="txt_field">
                    <input type="email" onBlur={handleOnChange} name="email" required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="txt_field">
                    <input type="password" onBlur={handleOnChange} name="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="signUp"/>
                <div class ="signup_link">
                Already have an account?<NavLink to="/"><a href="#">Login</a></NavLink>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;