import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);

const ContextUser = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const loginProvider = (provider) => {
        setLoding(true);
        return signInWithPopup(auth, provider);
    }
    const logout = () => {
        setLoding(true);
        return signOut(auth);
    }
    const login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateProfileClick = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const eamilVerifyClick = () => {
        return sendEmailVerification(auth.currentUser);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("auth changed", currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoding(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loginProvider,
        logout,
        login,
        register,
        loding,
        updateProfileClick,
        eamilVerifyClick,
        setLoding

    };
    return (
        <div>
            <AuthContext.Provider
                value={userInfo}
            >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextUser;