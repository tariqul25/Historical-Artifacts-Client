import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-289px)] px-4 md:px-6">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
