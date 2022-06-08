import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://finalfgfg.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }


    const handleDelete = email => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://finalfgfg.herokuapp.com/remove/${email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`Successfully Removed an user`);
                })
        }
    }
    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            {
                role !== 'admin' ?
                <td><button onClick={makeAdmin} className="btn btn-xs">Make Admin</button></td>
                :
                <td><button className="btn btn-xs">Already an Admin</button></td>
            }
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;