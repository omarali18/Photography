import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className='loginBox'>
           <h1>Login</h1>
            <form>
            <div class="row">
                <label for="email">Email</label>
                <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
            </div>
            <div class="row">
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;