import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/tech.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="head">
                <img className="logo" src={logo} alt="" />
                <h1>EmperiorTech</h1>
            </div>
            <nav>
                <Link to ="/home">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/services">Services</Link>
                <Link to ="/blogs">Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;