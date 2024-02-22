import React from 'react';
import "./Login.css"
// import useAuth from '../../../Hooks/useAuth';
import { Box, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './Fitebase/firebase.init';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import app from './Firebase/firebase.init';
// import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("log from login", location);
    

    const submitLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email);
        signIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            e.target.email.value = '';
            e.target.password.value = '';
            navigate(location?.state ? location.state : '/dashboard')
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div className='loginBox'>
           <h1>Login</h1>
            <form onSubmit={submitLogin}>
            <div class="loginRow">
                <label for="email">Email</label>
                <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
            </div>
            <div class="loginRow">
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <button type="submit">Login</button>
            </form>
            {/* <button onClick={handleGoogleLogin}>Google</button> */}

            <Link className="nav_list-link" to={`/signUp`}><button style={{ padding:"5px 15px" }}>Create New Admin</button></Link>
            {/* <button>Create New Admin</button> */}
            {/* <Box sx={{ textAlign: "center" }}>
                    <Button onClick={handleGoogleLogin} sx={{ py: 2, px: 4, my: 5 }} type="submit" variant="contained">Login With Google</Button>
                </Box> */}
        </div>
    );
};

export default Login;