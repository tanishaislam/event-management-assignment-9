import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo ={
        signInWithGoogle,
        signInUser,
        createUser,
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