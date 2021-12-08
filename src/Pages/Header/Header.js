import React from 'react';


import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">


            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog"> Our Blog</Link>

        </div>

    );
};

export default Header;