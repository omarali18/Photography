import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import app from '../Login/Fitebase/firebase.init';
// import app from '../Login/Fitebase/firebase.init';

const Register = () => {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const key = '1245';
    const submitRegister = (e)=>{
        const userKey = e.target.key.value
        const email = e.target.email.value
        const password = e.target.password.value
        e.preventDefault()
        if(key === userKey){
            createUser( email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setMessage("User Successfully Created")
                console.log(user);
                e.target.key.value = '';
                e.target.email.value = '';
                e.target.password.value = '';
              })
              .catch((error) => {
                console.log(error.message);
              });
        }
        else{
            setMessage("Your key is rong")
        }
    }

    setTimeout(() => {
        setMessage("");
}, "10000");

    return (
        <div className='loginBox'>
           <h1>Register</h1>
            <form onSubmit={submitRegister}>
                {
                    message == "Your key is rong" ? <p style={{color:"#ff0505", fontSize:"15px"}}>{message}</p> : <p style={{color:"#0fc70f", fontSize:"15px"}}>{message}</p>
                }
            <div class="loginRow" style={{ marginBottom:"0px" }}>
                <label htmlFor="key">Enter key</label>
                <input type="text" name="key" autocomplete="off" placeholder="Enter key"/>
            </div>
            <div class="loginRow" style={{ marginBottom:"0px" }}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
            </div>
            <div class="loginRow">
                <label htmlFor="password" style={{ marginBottom:"0px" }}>Password</label>
                <input type="password" style={{ marginBottom:"0px" }} name="password"/>
            </div>
            <button type="submit">Register</button>
            </form>

            <Link className="nav_list-link" to={`/login`}><button style={{ padding:"5px 15px" }}>Go to Login</button></Link>
            {/* <button>Create New Admin</button> */}
            {/* <Box sx={{ textAlign: "center" }}>
                    <Button onClick={handleGoogleLogin} sx={{ py: 2, px: 4, my: 5 }} type="submit" variant="contained">Login With Google</Button>
                </Box> */}
        </div>
    );
};

export default Register;