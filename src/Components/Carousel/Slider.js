import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/pexels-andrea-piacquadio-3817785.jpg';
import image2 from '../../images/pexels-cottonbro-4480505.jpg';
import image3 from '../../images/pexels-pixabay-162553.jpg';
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;