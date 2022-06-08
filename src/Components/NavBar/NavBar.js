import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../FirebaseInit';



const auth = getAuth(app);

const NavBar = () => {


    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="nav-item active">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/inventory">All Parts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs">Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/myportfolio">My Portfolio</Link>
                            </li>

                            <li className="nav-item">
                                {
                                    user ?
                                        <Link to="/dashboard">Dashboard</Link>
                                        :
                                        ''
                                }
                            </li>
                            <li className="nav-item">

                                {
                                    user ?

                                        <Link onClick={handleSignOut} to="/login">Logout</Link>
                                        :
                                        <Link to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>

                    <Link className="btn btn-ghost normal-case text-xl" to="/">LOGO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className="nav-item active">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inventory">All Parts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs">Blogs</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/myportfolio">My Portfolio</Link>
                        </li>

                        <li className="nav-item">
                            {
                                user ?
                                    <Link to="/dashboard">Dashboard</Link>
                                    :
                                    ''
                            }
                        </li>
                        <li className="nav-item">

                            {
                                user ?

                                    <Link onClick={handleSignOut} to="/login">Logout</Link>
                                    :
                                    <Link to="/login">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;