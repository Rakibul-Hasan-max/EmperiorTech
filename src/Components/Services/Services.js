import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="service">
            <h1>Services</h1>
            <hr />
            <p>We harness the strength of our multi-disciplinary teams to craft the perfect solutions for your business.</p>
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
        
        <div className="container">
            <div className="row">
                <div className="col g-3 mx-2 card none">
                    <h2>{name}</h2>
                    <p>Team: {team}</p>
                    <h5>Price: {price}</h5>
                    <p>Description: {description}</p>
                    <p>Content: {content}</p>    
                </div>
                <div class="col g-3 mx-2 card none">
                    <h2>{name}</h2>
                    <p>Team: {team}</p>
                    <h5>Price: {price}</h5>
                    <p>Description: {description}</p>
                    <p>Content: {content}</p>    
                </div>
            </div>
        </div> 
    );
};


export default Services;