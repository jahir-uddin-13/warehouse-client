import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {

    const { register, resetField, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://finalfgfg.herokuapp.com/bikes`;
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
                alert('item added succesfully');
                resetField("name");
                resetField("description");
                resetField("img");
                resetField("min_order_quantity");
                resetField("available_quantity");
                resetField("price");
            })
    };

    return (
        <div>
            
            <div>
                
                <form className='d-flex flex-column w-50 mx-auto mt-3' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='mt-5 text-primary  text-3xl font-bold'>Add New Item to Inventory</h1>
                    <input className='mt-2 p-1 border-primary' placeholder='Name' type="text" {...register("name")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Product Description' type="description" {...register("description")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Min Order Quantity' type="number" {...register("min_order_quantity")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Photo URL' type="text" {...register("img")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Add Available Quantity' type="number" {...register("available_quantity")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Price' type="number" {...register("price")} required />
                    <input className='btn btn-primary mt-2' type="submit" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;