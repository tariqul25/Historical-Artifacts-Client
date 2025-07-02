<<<<<<< HEAD
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl text-center font-bold mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Sign in to your HistoriTrack account</p>

        <form onSubmit={handlePassLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 py-2 rounded flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-amber-600 hover:text-amber-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
=======
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { HistoryContext } from '../../contexts/HistoryContext';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const { emailSignIn, googleSignIn } = use(HistoryContext)
    const [errorMessage, setErrorMessage] = useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const handlePassLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const user = Object.fromEntries(formData.entries())
        const { email, password } = user

        setErrorMessage('')

        emailSignIn(email, password).then(result => {
            console.log(result);
            navigate(`${location.state ? location.state : '/' }`)
        }).catch(error => {
            setErrorMessage('error');
        })
    }

    const handleGoogleSignIn = () => {
        // setErrorMessage('')
        googleSignIn()
            .then(result => {
                navigate(`${location.state ? location.state : '/'} `)
            }).catch(error => {
                setErrorMessage('something wrong');
            })
    }

    return (
        <div className='py-6'>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handlePassLogin} className="fieldset">
                        <h2 className='text-center text-4xl'>Login Now!</h2>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <p>New to this site? <Link className='underline' to='/register'>Register</Link></p>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center font-bold'>Or</p>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </div>
                {
                    errorMessage && <p>{errorMessage}</p>
                }
            </div>
        </div>
    );
};

export default SignIn;
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
