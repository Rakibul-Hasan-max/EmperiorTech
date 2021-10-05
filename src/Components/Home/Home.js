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
            <div>
                <div className="container marketing">
                    <h1 className="text-center mt-5 mb-5">Our Clients</h1>
                    <div className="row mb-5">
                        <div className="col-lg-4 text-center">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>John Michel</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div> 
                        <div class="col-lg-4 text-center">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Henry Aiden</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div> 
                        <div class="col-lg-4 text-center">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Lezel Burg</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div> 
                    </div>
                </div>
            </div>
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