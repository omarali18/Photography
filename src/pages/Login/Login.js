import React from 'react';
import "./Login.css"
// import useAuth from '../../../Hooks/useAuth';
import { Box, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './Fitebase/firebase.init';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import app from './Firebase/firebase.init';
// import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const {signIn, loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("log from login", location);
    const provider = new GoogleAuthProvider();
    

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


     const handleGoogleLogin = () => {
         // signInWithPopup(auth, provider)
         loginWithGoogle()
        .then((result) => {
                navigate(location?.state ? location.state : '/dashboard')
          }).catch((error) => {
            console.log(error.message);
          })
    }
    //  const handleGoogleLogin = () => {
    //     // signInWithPopup(auth, provider)
        
    //     // loginWithGoogle()
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         const user = result.user;
    //         console.log(user.email);
    //         if (user.email === myEmail) {
    //             navigate(location?.state ? location.state : '/dashboard')
    //             console.log('user',user.email);
    //         } else {
    //             signOut(auth)
    //                 .then(() => {
    //                     console.log("Sign-out successful.");
    //                 })
    //                 .catch((error) => {
    //                     console.log("An error occurred during sign-out:", error);
    //                 });
    //             console.log("Access denied. Only 'omar.eu22@gmail.com' is allowed.");
    //         }
    //       }).catch((error) => {
    //         console.log(error.message);
    //       })
    // }

    return (
        <div className='loginBox'>
           <h1>Login</h1>
            <div className='formBox'>
            <form onSubmit={submitLogin}>
            <div className="loginRow">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email@example.com"/>
            </div>
            <div className="loginRow" style={{ marginBottom:"0px" }}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <button className='loginButton' style={{ padding: "8px 12px" }} type="submit">Login</button>
            </form>
            <button className='loginButton' style={{ padding: "8px 12px" }} onClick={handleGoogleLogin}>Login With Google</button>
            </div>
            {/* <button onClick={handleGoogleLogin}>Google</button> */}

            {/* <Link className="nav_list-link" to={`/signUp`}><button className='loginButton' style={{ padding:"5px 15px" }}>Create New Admin</button></Link> */}
            <Link className="nav_list-link" style={{ marginTop:"20px" }} to={`/signUp`}><span style={{ color:'blue', padding:"5px 15px" }}>Create New Account</span></Link>
            {/* <button>Create New Admin</button> */}
            {/* <Box sx={{ textAlign: "center" }}>
                    <Button onClick={handleGoogleLogin} sx={{ py: 2, px: 4, my: 5 }} type="submit" variant="contained">Login With Google</Button>
                </Box> */}
        </div>
    );
};

export default Login;