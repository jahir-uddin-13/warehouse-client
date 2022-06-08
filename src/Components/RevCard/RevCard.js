import React from 'react';

const RevCard = (props) => {
    const {name, Ratings, comment} = props.review;
    return (
        <div className='mt-3'>
            <div className="card" style={{width: '18rem'}}>
                    <div className="d-flex flex-column align-items-start card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text text-justify"><span className='font-weight-bold'>Comment: </span> {comment}</p>
                        <h5 className='font-bold'>Ratings: {Ratings}</h5>
                    </div>
            </div>
        </div>
    );
};

export default RevCard;