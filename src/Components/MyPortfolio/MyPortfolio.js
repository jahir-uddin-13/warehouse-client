import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            
            <div className='ms-5'>
            <div className='text-start mt-5 font-bold text-lg'>
                <h1>Jahir Uddin Khan Babor</h1>
                <h6>Johirk4000@gmail.com</h6>
                <p>Khilgaon, Dhaka-1219</p>
                <p>Phone: 01820055812</p>
            </div>
            <div className='text-start mt-4'>
                <h2 className='text-xl font-bold'>Objective</h2>
                <p className='w-50 text-justify'>I am a professionally qualified fire engineer with 7 years experince. I have recently achieved company accreditation in the use of Counter balance fork lift trucks and i am seeking employment that will make best use of my skills and allow me to develop them further. I am determined and enthusuastic i have developed good planning & organisational skills and am confident working independently or as part of a team i am flexible regarding.</p>
            </div>
            <div className='text-start mt-4 '>
                <h2 className='text-lg font-bold'>Education</h2>
                <p>
                    <h6>Univarsity: Daffodil Institute of IT</h6>
                    Department: CSE
                </p>
            </div>
            <div className='text-start mt-5'>
                <h2 className='text-lg font-bold'>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>TailwindCss</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>Expressjs</li>
                    <li>Node</li>
                    <li>MongoDb</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div className='text-start mb-5 mt-4'>
                <h2 className='text-lg font-bold'>Live Website projects</h2>
                <h3 className='text-primary font-bold'> <a href="https://assignment11-802a5.web.app/">First Project</a></h3>
                <h3 className='text-primary font-bold'> <a href="https://cosmic-pie-96f6c2.netlify.app/">Second Project</a></h3>
                <h3 className='text-primary font-bold'> <a href="https://luxury-pithivier-e23706.netlify.app/">Third Project</a></h3>
            </div>
            </div>
        </div>
    );
};

export default MyPortfolio;