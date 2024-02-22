import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
// import useAuth from '../../../Hooks/useAuth';
import Box from '@mui/material/Box';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {Navigate, useLocation} from "react-router-dom"
 
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log('location', location.pathname);
    if (loading) {
        return <Box sx={{ textAlign: "center" }}><CircularProgress sx={{ mt: 8 }} color="secondary" /></Box>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;