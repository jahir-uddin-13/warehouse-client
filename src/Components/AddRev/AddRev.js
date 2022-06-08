import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import app from '../../FirebaseInit';


const auth = getAuth(app);
const AddRev = () => {

    const { register, resetField, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://finalfgfg.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Comment added succesfully');
                resetField("comment");
            })
    };

    const [user] = useAuthState(auth);
    return (
        <div>

            <div className='d-flex'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='mt-5'>Add a Review</h1>
                    
                    <legend className='d-flex'>Enter Name:
                        <input {...register("name")} />
                    </legend>
                    <legend className='d-flex'>Add a comment:
                        <textarea {...register("comment")} />
                    </legend>
                    <legend>Select Ratings:
                        <select className='ms-3 mt-3 bg-info' {...register("Ratings")}>
                            <option value="5">5 Star</option>
                            <option value="4">4 Star</option>
                            <option value="3">3 Star</option>
                            <option value="2">2 Star</option>
                            <option value="1">1 Star</option>
                        </select>
                    </legend>

                    <input className='btn btn-secondary' type="submit" value='Add Review' />
                </form>
            </div>
        </div>
    );
};

export default AddRev;