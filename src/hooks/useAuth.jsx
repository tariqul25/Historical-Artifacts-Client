import React, { use } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';

const useAuth = () => {
    const userInfo = use(HistoryContext)
    return userInfo;

};

export default useAuth;