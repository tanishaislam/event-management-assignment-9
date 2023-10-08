import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }

    },[])
    const authInfo ={
        user,
        loading,
        signInWithGoogle,
        signInUser,
        createUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProviders.propTypes ={
    children: PropTypes.node
}

export default AuthProviders;