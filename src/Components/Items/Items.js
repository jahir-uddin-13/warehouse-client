import React from 'react';
import { useNavigate } from 'react-router-dom';
const Items = (props) => {
    const {_id, name, description, price, available_quantity, min_order_quantity, img} = props.product
    const navigate = useNavigate();

    const navigateToDetails = id =>{
        navigate(`/inventory/${id}`);
    }
    const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div className="card mt-3" style={{ width: '18rem' }}>
                <img style={{height:'200px'}} className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-center flex-wrap'>
                        
                        <p className='btn btn-primary ms-4 mt-3'>Min-Order-Quantity: {min_order_quantity}</p>
                        <p className='btn btn-primary ms-4 mt-3'>Available Quantity: {available_quantity}</p>
                        <p className='btn btn-primary mt-3 ms-4'>Price: {price}</p>
                    </div>
                    <p onClick={() => navigateToDetails(_id)} className='btn btn-secondary d-none'>Update</p>
                    <p onClick={() => navigateToPurchase(_id)} className='btn btn-secondary ms-4'>Order now</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Items;