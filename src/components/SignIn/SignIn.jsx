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