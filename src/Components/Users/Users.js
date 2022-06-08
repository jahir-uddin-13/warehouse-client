import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import UserRow from './UserRow';
const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://finalfgfg.herokuapp.com/use', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Users;