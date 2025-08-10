import React from 'react';
import { Link } from 'react-router';
import animationData from '../../src/assets/lotties/error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4">
      <div className="text-center max-w-md">
         <Lottie  animationData={animationData} loop={true} className="" />
        <Link to='/'> <button
          className="text-amber-600 btn btn-outline    text-lg"
        >Return to Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
