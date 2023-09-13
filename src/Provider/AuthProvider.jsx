/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext= createContext(null);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const createUser=(email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const userSignIn=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const userGoogleSignIn=()=>{
        return signInWithPopup(auth,provider);
    }
    
    const authInfo={
        user,
        createUser,
        userSignIn,
        userGoogleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;