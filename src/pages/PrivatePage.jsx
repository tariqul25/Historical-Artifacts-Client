import React, { use } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router';

const PrivatePage = ({ children }) => {
    const { user, loading } = use(HistoryContext)
    const location = useLocation()

    if (loading) return <Loading></Loading>

    if (user) return children

    return (
        <Navigate state={location.pathname} to='/signin'></Navigate>
    );
};

export default PrivatePage;