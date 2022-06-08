import React from 'react';

const Bussiness = () => {
    return (
        <div>
            <h1 className='text-primary font-bold text-4xl text-center mt-5 mb-5'>Bussiness Summary</h1>
            <div className=''>
                <div className='d-flex flex-wrap justify-content-around'>
                    <div className="card mt-5" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"><i className="p-2 fa-solid fa-circle-user"></i><br></br><span className='h3'>We Served 100+ customers</span></p>
                        </div>
                    </div>
                    <div className="card mt-5" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"><i className="fa-solid fa-arrow-up-right-dots"></i><br></br><span className='h3'>120M+ Annual revenue</span></p>
                        </div>
                    </div>
                    <div className="card mt-5" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"><i className="fa-solid fa-ranking-star"></i><br></br><span className='h3'>33k+ Reviews</span></p>
                        </div>
                    </div>
                    <div className="card mt-5" style={{ width: '18rem' }}>


                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"><i className="fa-solid fa-screwdriver-wrench"></i><br></br><span className='h3'>50+ Tools</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bussiness;