import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css';
import picture from '../../images/banner.png';

const Home = () => {
    return (
        <div>
            <div className="home">
                <h1>We Guide Brands To Digital Engagement</h1>
                <hr />
                <p>Make Potential Possible. We are a digitally-led,full-service 360 Degree Creative Agency. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repellat laudantium minus soluta temporibus ea beatae dolores. Rem accusamus inventore error possimus nulla modi et temporibus laborum, recusandae omnis, praesentium nam voluptatum ab ullam facere, suscipit ipsum mollitia? Assumenda tempora amet ut quas minima quo inventore error, magni rem iste? </p>
                <button type="button" class="btn btn-success mt-5">Contact Us</button>
            </div>
            <div className="text-center m-5 d-flex new">
                <img className="picc" src={picture} alt="" />
                <div>
                    <h1>Success Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut commodi doloremque autem ad voluptatibus ducimus, fugiat magnam sunt excepturi officia, iure iusto id obcaecati culpa fuga sint laboriosam eveniet animi aperiam dolorem. Saepe molestiae sint enim, fugit a rerum consequuntur error eligendi doloribus harum corporis distinctio reprehenderit earum facilis!</p>
                    <button type="button" class="btn btn-info">Read more</button>
                </div>
            </div>
            <h1 className="text-center m-5">Our Services</h1>
            <Lefts></Lefts>
        </div>
    );
};


const Lefts = () => {
  const [lefts, setLefts] = useState([]);
  useEffect( () => {
    fetch('./Blogs.JSON')
    .then(res => res.json())
    .then(data => setLefts(data));
  } ,[])

  return(
    <div className="left">
        {
            lefts.map(left => <Left left={left} key={left.team}></Left>)
        }
      
    </div>
  )
}


const Left = (props) => {
    console.log(props.left);
    const {name, team, price, description, content} =  props.left;
    return (
        <div className="serv">
            <h2>Name: {name}</h2>
            <p>Team: {team}</p>
            <h5>Price: {price}</h5>
            <p>Description: {description}</p>
            <p>Content: {content}</p>
        </div>
    );
};



export default Home;