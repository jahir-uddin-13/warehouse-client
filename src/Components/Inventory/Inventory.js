import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://finalfgfg.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center justify-content-sm-around mt-3'>
            {
                products.map(product => <Items
                    
                    key={product._id} product={product}></Items>)
            }
            </div>
            
        </div>
    );
};

export default Inventory;