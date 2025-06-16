import React, { use } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';

const useAuth = () => {
    const auth = use(HistoryContext)
    return auth;

};

export default useAuth;