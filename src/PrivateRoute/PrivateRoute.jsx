/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;