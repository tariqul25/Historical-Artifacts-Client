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
<<<<<<< HEAD
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user in the auth state change', currentUser)
            setLoading(false);
        });

=======
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
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