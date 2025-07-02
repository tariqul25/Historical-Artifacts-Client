import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { HistoryContext } from '../../contexts/HistoryContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Navbar = () => {
    const { user } = use(HistoryContext);
    // console.log(user?.email);
    const handleSignOut = () => {
        signOut(auth)
            .then(result => console.log('sign-out success'))
            .then(error => console.log(error))
    }
    return (
<<<<<<< HEAD
        <div className='bg-white max-w-7xl mx-auto px-4 md:px-10  text-[#ffffff]' >
            <div className="navbar ">
                <div className="navbar-start">
                    <h2><span className='font-bold text-gray-900'>Epoch</span>Vault</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className="text-gray-700 hover:text-amber-600 hover:bg-amber-50" to='/'>Home</NavLink></li>
                        <li><NavLink className="text-gray-700 hover:text-amber-600 hover:bg-amber-50" to='/all-artifacts'>All-Artifacts</NavLink></li>
                        <li><NavLink className="text-gray-700 hover:text-amber-600 hover:bg-amber-50" to='/add-artifacts'>Add-Artifacts</NavLink></li>
=======
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
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
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
                                <li><NavLink to={`/shareartifacts/${user?.email}`}>My-Artifacts</NavLink></li>
<<<<<<< HEAD
                                <li><NavLink to={`/liked-artifacts/${user?.email}`}>Liked Artifacts</NavLink></li>
=======
                                <li><NavLink to='/liked-artifacts'>Liked Artifacts</NavLink></li>
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
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