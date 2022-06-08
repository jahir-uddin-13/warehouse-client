import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import app from '../../FirebaseInit';



const auth = getAuth(app);
const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    
        const url = `https://finalfgfg.herokuapp.com/users/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Profile Updated Succesfully');
            })
    
    };


    return (
        <div>
            <form className='d-flex flex-column justify-content-end align-items-start text-3xl' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='mt-5 text-primary font-bold'>User Profile</h1>
                <h5><span className='text-primary font-bold'>Name:</span> {user.displayName}</h5>
                <h5><span className='text-primary font-bold'>Email:</span> {user.email}</h5>
                <label><span className='text-primary font-bold'>First Name:</span> <input {...register("firstName")} placeholder='First name' /></label>
                <label><span className='text-primary font-bold'>Last Name:</span> <input {...register("lastName")}  placeholder='Last name'/></label>
                <label><span className='text-primary font-bold'>Education:</span> <input {...register("Education")} placeholder='Education' /></label>
                <label className='d-flex'><span className='text-primary font-bold'>Location:</span> <input {...register("city")} placeholder='city' />
                </label>
                <label className='ms-5'><input {...register("dist")} placeholder='district'/></label>
                <label><span className='text-primary font-bold'>Phone:</span> <input {...register("phone")} placeholder='Enter phone number' /></label>
                <label><span className='text-primary font-bold'>Gender:</span>
                <select {...register("gender")}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                </label>
                <input className='btn btn-dark mt-3' type="submit" value='Update Profile'/>
            </form>
        </div>
    );
};

export default MyProfile;