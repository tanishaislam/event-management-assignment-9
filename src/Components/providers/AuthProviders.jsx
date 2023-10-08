import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo ={
        signInWithGoogle,
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