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
        <div>
            <div className="story">
                <div>
                    <img className="pic" src={picture} alt="" />
                </div>
                <div className="text">
                    <h1>Our Story</h1>
                    <p>Based primarily in Dhaka, Bangladesh, we harness the strength of our multi-disciplinary teams to craft the perfect solutions for your business, be it online or offline.</p>
                    <p>Operating since 2020, we’ve created new wings from Hasan Group to EmperiorTech. With our experience, we’ve established ourselves as one of the knowing agencies in the region. Our small, flexible, agile, and design-led structures and processes allow us to be highly responsive and innovative.</p>
                </div>
            </div>
            <div className="team">
                <Team></Team>
            </div>
        </div>
    );
};


const Team = () => {
    return (
        <div>
            <h1>Our Team</h1>
            <p>We’re made of passionate leaders, strategists, managers, developers, animators and designers who work together under one umbrella.</p>
            <div>
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EnVtq1PTs7eIIqA7gQ6K50jAxCWRcIxp7w&usqp=CAU" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YXuXFD_3O-fV8BQakm1roHjRFkj0KyqDvg&usqp=CAU" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNohZA1iuO8nKoqmQVS95aFgA7esQf5rzGQ&usqp=CAU" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfUVYLY1lnyeDVVvWknVrlYM2O5rTiNbliQ&usqp=CAU" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjj-LLizEFQJ7FRRXX1s8Dmjnsm9vtqP3LIQ&usqp=CAU" alt="" />
                <img className="phots" src="https://image.shutterstock.com/image-photo/handsome-man-wear-black-suit-260nw-462022408.jpg" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz1ZLFhjz0hzm4GTD5PmiAOE7GvY-nM6A69j9NBNtHkuJb6LPiwr3_q2EgxequqkS860&usqp=CAU" alt="" />
                <img className="phots" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6ZufjF_JqvZaQl8dcu6ABLmQ1BhgAIdQiYWh9fg5PZwFNVGGQiDRvgUncIC8KI1uy7w&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default About;