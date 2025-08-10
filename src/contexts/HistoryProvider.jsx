import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { HistoryContext } from './HistoryContext';



const HistoryProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
      const [likeCount, setLikeCount] = useState(0);
      const [isLiked, setIsLiked] = useState(false);
      const [likedItems, setLikedItems] = useState({});


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    const signout= ()=>{
        signOut(auth);
    }
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user in the auth state change', currentUser)
            setLoading(false);
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
        googleSignIn,
        signout,
        setIsLiked,
        isLiked,
        setLikeCount,
        likeCount,
        setLikedItems,
        likedItems
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