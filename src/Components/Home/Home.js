import React, { useEffect, useState } from 'react';
import AllRev from '../AllRev/AllRev';
import Bussiness from '../Bussiness/Bussiness';
import Slider from '../Carousel/Slider';
import ExtraSec from '../ExtraSec1/ExtraSec';
import ExtraSection from '../ExtraSec2/ExtraSection';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Spinner from '../Spinner/Spinner';


const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);

    if (spinner) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            
            <Slider></Slider>
            <Products></Products>
            <Bussiness></Bussiness>
            <AllRev></AllRev>
            <ExtraSec></ExtraSec>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );

};

export default Home;