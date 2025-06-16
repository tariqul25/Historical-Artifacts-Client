import React, { use } from 'react';
import { Link } from 'react-router';
import { HistoryContext } from '../../contexts/HistoryContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
    const {createUser}=use(HistoryContext)
    const handleEmailRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const user = Object.fromEntries(formData.entries())
        const {name,email,password,photoUrl}=user

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl,
                }).then((result) => {
                     console.log('success');
                }).catch((error) => {
                   console.log(error);
                });
        }).catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='py-6'>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl'>Register Now!</h2>
                    <form onSubmit={handleEmailRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">PhotoUrl</label>
                        <input type="text" name='photoUrl' className="input" placeholder="photoUrl" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <p>Already Have an Account? <Link className='underline' to='/signin'>Login</Link></p>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;