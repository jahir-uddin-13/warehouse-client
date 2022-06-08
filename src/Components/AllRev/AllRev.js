import React, { useEffect, useState } from 'react';
import RevCard from '../RevCard/RevCard';

const AllRev = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://finalfgfg.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    return (
        <div>
            <h1 className='mt-5 text-primary font-bold text-4xl text-center'>All Customer Reviews</h1>
            <div className='d-flex flex-wrap justify-content-around mt-5 mb-5'>
                {
                    reviews.map(review => <RevCard key={review._id} review={review}></RevCard>)
                }
            </div>
        </div>
    );
};

export default AllRev;