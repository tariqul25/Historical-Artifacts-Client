import React from 'react';


const ErrorPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-3xl text-gray-600 mb-4"> Page not found</p>
        <a href="/" className="text-amber-600 hover:text-amber-900 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
