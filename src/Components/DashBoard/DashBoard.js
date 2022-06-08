import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import app from '../../FirebaseInit';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
import './Dashboard.css';


const auth = getAuth(app);
const DashBoard = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const [admin, adminLoading] = useAdmin(user);
    console.log('this is admin' , admin);

    if(adminLoading){
        return <Spinner></Spinner>
    }

    return (
        <div>

            <div className='row'>
                <div className='col-4'>
                    <ul className="navbar w navbar-nav d-flex flex-column align-items-start justify-content-start p-5">
                        <li className="nav-item active btn btn-dark mt-3">
                            <Link className="" to="/dashboard">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                            !admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link to="myorder">Orders</Link>
                                </li>
                                :
                                <></>
                        }
                        {
                            !admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link className="" to="addreview">Add Review</Link>
                                </li>
                                :
                                <></>
                        }
                        {
                            admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link className="" to="manageorder">Manage Order</Link>
                                </li>
                                :
                                <></>
                        }
                        {
                            admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link className="" to="addproduct">Add Product</Link>
                                </li>
                                :
                                <></>
                        }
                        {
                            admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link className="" to="users">Make Admin</Link>
                                </li>
                                :
                                <></>
                        }
                        {
                            admin ?
                                <li className="nav-item btn btn-dark mt-3">
                                    <Link className="" to="manageproducts">Manage Products</Link>
                                </li>
                                :
                                <></>
                        }


                    </ul>
                </div>
                <div className='col-8' >
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;