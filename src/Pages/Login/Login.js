import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(loginData);
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <div className="form-bg">
            <div class="center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div class="txt_field">
                        <input type="email" onBlur={handleOnChange} name="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" name="password" onBlur={handleOnChange} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input type="submit" value="Login" />
                    <h4>{authError}</h4>
                    <div class="signup_link">
                        Not a member?<NavLink to="/signup"><a href="#">Signup</a></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;