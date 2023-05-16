import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";    
import app from '../Firebase/Firebase.confic';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const githubLogin = () => { 
        setLoading(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const resetEmail = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const updateUser = (name, photo) => { 
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged unsubscribe', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        LogOut,
        googleLogin,
        githubLogin,
        resetEmail,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;