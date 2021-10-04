import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>We Guide Brands To Digital Engagement</h1>
            <hr />
            <p>Make Potential Possible. We are a digitally-led,full-service 360 Degree Creative Agency.</p>
            <button>Contact Us</button>
            <Services></Services>
        </div>
    );
};

export default Home;