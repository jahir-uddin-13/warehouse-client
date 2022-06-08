import React from 'react';
import { toast } from 'react-toastify';
const OrderCard = (props) => {
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://finalfgfg.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`Successfully Removed an order`);
                    props.refetch();
                })
        }
    }
    return (
        <div>
            <div className="card ml-5 mt-5" style={{width: '25rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">User: {props.order.name}</h5>
                        <h5 className="card-title">Email: {props.order.email}</h5>
                        <h5 className="card-title">Parts: {props.order.partsName}</h5>
                        <h5 className="card-title">Order Quantity: {props.order.order_quantity}</h5>
                        <h5 className="card-title">Total Price: {props.order.totalPrice}</h5>
                        <h5 className="card-title">Address: {props.order.address}</h5>
                        <h5 className="card-title">Phone: {props.order.phoneNumber}</h5>
                        <button onClick={() => handleDelete(props.order._id)} className="btn btn-primary">Delete Order</button>
                    </div>
            </div>
        </div>
    );
};

export default OrderCard;