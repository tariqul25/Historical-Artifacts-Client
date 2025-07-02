import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
<<<<<<< HEAD
            <div className='min-h-[calc(100vh-403px)] bg-gradient-to-br from-amber-50 via-white to-orange-50 max-w-7xl mx-auto px-4 md:px-10 py-10'>
=======
            <div className='min-h-[calc(100vh-403px)]'>
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;