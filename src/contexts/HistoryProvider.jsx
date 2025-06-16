import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { HistoryContext } from './HistoryContext';



const HistoryProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const historyInfo = {
        createUser,
        emailSignIn,
        user,
        loading,
        googleSignIn
    }
    return (
        <div>
            <HistoryContext value={historyInfo}>
                {children}
            </HistoryContext>
        </div>
    );
};

export default HistoryProvider;