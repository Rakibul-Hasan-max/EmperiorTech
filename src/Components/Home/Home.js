import React from 'react';
import banner from '../../images/banner.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <img className="banner" src={banner} alt="" />
        </div>
    );
};

export default Home;