import React, { useState, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { HistoryContext } from '../../contexts/HistoryContext';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { emailSignIn, googleSignIn } = use(HistoryContext);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handlePassLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const { email, password } = user;

    setErrorMessage('');

    emailSignIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state?.from?.pathname || '/');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password',
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Signed in successfully',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state?.from?.pathname || '/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Sign-In Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center px-4 py-16 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl text-black text-center font-bold mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Sign in to your ArtifactAtlas account
        </p>

        <form onSubmit={handlePassLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-black text-sm mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black text-sm mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600  hover:bg-amber-700 text-white cursor-pointer py-2 rounded transition-colors text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="bg-white px-2 text-gray-500">or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border text-black border-gray-300 py-2 rounded cursor-pointer flex items-center justify-center bg-white hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-black text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-amber-600  hover:text-amber-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
