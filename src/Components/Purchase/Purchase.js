import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import app from '../../FirebaseInit';
import './Purchase.css';

const auth = getAuth(app);
const Purchase = () => {

    const [user] = useAuthState(auth);
    const { register, getValues,resetField, setValue, formState: { errors, isDirty, isValid }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://finalfgfg.herokuapp.com/orders`;
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
                alert('Order added for Payment method');
                resetField("address");
                resetField("phoneNumber");
            })
    };

    const { detailId } = useParams();
    const [parts, setParts] = useState([]);

    useEffect(() => {
        const url = `https://finalfgfg.herokuapp.com/inventory/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    
    const [price, setPrice] = useState('');
    const tempPrice = parts.price * parts.min_order_quantity;

    return (
        <div>
            
            <div className='d-flex justify-content-center'>
                <div>
                    <h1 className='mt-3 text-primary text-3xl font-bold'>Purchase Information</h1>
                    <form className='mt-5 d-flex flex-column align-items-start'
                        onChange={() => {
                            const values = getValues("order_quantity");
                            console.log(values);
                            const totalPrice = parts.price * values;
                            setPrice(totalPrice);
                        }}
                        onSubmit={handleSubmit(onSubmit)}>
                         
                        <h4 className='p-2'>User Name: {user.displayName} {setValue('name', `${user.displayName}`)} </h4>
                        <h4 className='p-2'>User Email: {user.email} {setValue('email', `${user.email}`)}</h4>
                        <h4 className='p-2'>Product Name: {parts.name} {setValue('partsName', `${parts.name}`)}</h4>
                        <h4 className='p-2'>Min-Order-Quantity: <input placeholder={parts.min_order_quantity} disabled /></h4>
                        <h4 className='p-2'>Available-Quantity: <input placeholder={parts.available_quantity} disabled /></h4>
                        <h4 className='p-2'>Unit Price: <input placeholder={parts.price} disabled /></h4>
                        <h4 className='p-2'>Order quantity: <input
                            type='number' name='order' defaultValue={parts.min_order_quantity} {...register("order_quantity", { min: parts.min_order_quantity, max: parts.available_quantity })} />
                        </h4>
                        <h6 className='p-2' className='text-danger'>{errors.order_quantity && "Quantity is not available right now"}</h6>
                        <h4 className='p-2'>Total Price: { price ? price : tempPrice} {setValue('totalPrice', `${price}`)}</h4>
                        <h4 className='p-2'>Blilling Address: <input {...register("address")} placeholder='Enter address' required/></h4>
                        <h4 className='p-2'>Phone Number: <input type='number' {...register("phoneNumber")} placeholder='Enter phone number' required/></h4>
                        <input className='btn btn-primary mx-auto mt-3' type="submit" value='Place Order' disabled={!isValid} />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;