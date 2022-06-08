import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../FirebaseInit';



const auth = getAuth(app);
const Orders = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch(`https://finalfgfg.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);



    const handleDelete = id => {


        const url = `https://finalfgfg.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = order.filter(product => product._id !== id);
                setOrder(remaining);
            })

    }
    return (
        <div>
            {
                order.map(ordered => <div key={ordered._id} className="card mt-5" style={{ width: '18rem' }}>
                    <div className="card-header">
                        <h6>Product Name: {ordered.partsName}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item">Quantity: {ordered.order_quantity}</li>
                        <li className="list-group-item">Total Payable amount: {ordered.totalPrice}</li>
                        <li className="list-group-item">Phone: {ordered.phoneNumber}</li>
                        <li className="list-group-item"><label for="my-modal" class="btn modal-button">Cancel order</label>
                            <button className='btn btn-primary ms-3'>Pay</button></li>
                    </ul>






                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Want to Cancel the order?</h3>
                            
                            <div class="modal-action">
                                <label onClick={() => handleDelete(ordered._id)} for="my-modal" class="btn">Yes</label>
                            </div>
                        </div>
                    </div>












                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Do you want to proceed?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button onClick={() => handleDelete(ordered._id)} type="button" className="btn btn-primary" data-dismiss="modal">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Orders;