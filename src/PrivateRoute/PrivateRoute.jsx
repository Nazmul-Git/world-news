/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if(loading){
        return <Spinner className='mt-4 ' animation="border" variant="warning" />
    }    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;