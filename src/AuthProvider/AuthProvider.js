import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../pages/Login/Fitebase/firebase.init';
// import app from '../pages/Login/Firebase/firebase.init';
// import useFirebase from '../../Hooks/useFirebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const createUser = (email, password) =>{
        // setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        // setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    const singOut = () =>{
        // setLoding(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user in change here", currentUser);
            setUser(currentUser);
            setLoding(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const allContext = {
        user,
        loading,
        createUser,
        loginWithGoogle,
        signIn,
        singOut,
    }
    // const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;