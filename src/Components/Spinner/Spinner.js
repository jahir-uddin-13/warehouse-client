import React from 'react';

const Spinner = () => {
    return (
        <div className='flex'>
            <div className="spinner-border mx-auto mt-52 place-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;