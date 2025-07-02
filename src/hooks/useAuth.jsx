import React, { use } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';

const useAuth = () => {
<<<<<<< HEAD
    const userInfo = use(HistoryContext)
    return userInfo;
=======
    const auth = use(HistoryContext)
    return auth;
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b

};

export default useAuth;