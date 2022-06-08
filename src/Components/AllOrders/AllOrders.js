import React from 'react';
import { useQuery } from 'react-query';
import OrderCard from '../OrderCard/OrderCard';
import Spinner from '../Spinner/Spinner';
const AllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://finalfgfg.herokuapp.com/allorder', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <div className='flex flex-wrap'>
            {
                orders.map(ord => <OrderCard key={ord._id} order={ord} refetch={refetch}></OrderCard>)
            }
        </div>
    );
};

export default AllOrders;