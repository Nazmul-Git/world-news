/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext= createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const user={}
    const authInfo={
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;