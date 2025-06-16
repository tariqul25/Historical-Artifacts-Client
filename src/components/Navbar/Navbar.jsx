import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { HistoryContext } from '../../contexts/HistoryContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Navbar = () => {
    const { user } = use(HistoryContext);
    const handleSignOut = () => {
        signOut(auth)
            .then(result => console.log('sign-out success'))
            .then(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <h2><span className='font-bold'>Epoch</span>Vault</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/all-artifacts'>All-Artifacts</NavLink></li>
                        <li><NavLink to='/add-artifacts'>Add-Artifacts</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                                <li>
                                    <a className="justify-between">

                                        {user?.displayName}
                                    </a>
                                </li>
                                <div className='md:hidden'>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/all-artifacts'>All-Artifacts</NavLink></li>
                                    <li><NavLink to='/add-artifacts'>Add-Artifacts</NavLink></li>
                                </div>
                                <li><NavLink to='/my-artifacts'>My-Artifacts</NavLink></li>
                                <li><NavLink to='/liked-artifacts'>Liked Artifacts</NavLink></li>
                                <li><p onClick={handleSignOut}>Logout</p></li>
                            </ul>
                        </div> 
                        : 
                        <div className='flex '>
                            <Link to='/signin'><button className='btn'>Login</button></Link>
                            <div className="dropdown block md:hidden">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-32 p-2 shadow right-0"
                                >
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/all-artifacts'>All-Artifacts</NavLink></li>
                                    <li><NavLink to='/add-artifacts'>Add-Artifacts</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div >
        </div >
    );
};

export default Navbar;