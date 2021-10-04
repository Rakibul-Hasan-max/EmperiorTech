import React from 'react';
import './About.css';
import picture from '../../images/story.jpg';

const About = () => {
    return (
        <div className="nav">
            <h1>About Us</h1>
            <hr />
            <p>EmperiorTech is the digital agency and IT solutions company of Bangladesh. We are a full-service creative agency. We combine strategy,marketing, Design and Technology to help you stay aheadof your competition.</p>
            <Story></Story>
        </div>
    );
};

const Story = () => {
    return (
        <div className="story">
            <div>
                <img className="pic" src={picture} alt="" />
            </div>
            <div>
                <h1>Our Story</h1>
                <p>Based primarily in Dhaka, Bangladesh, we harness the strength of our multi-disciplinary teams to craft the perfect solutions for your business, be it online or offline.</p>
                <p>Operating since 2020, we’ve created new wings from Hasan Group to EmperiorTech. With our experience, we’ve established ourselves as one of the knowing agencies in the region. Our small, flexible, agile, and design-led structures and processes allow us to be highly responsive and innovative.</p>
            </div>
        </div>
    );
};

export default About;