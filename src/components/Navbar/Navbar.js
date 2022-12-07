import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
        </nav>
    );
};

export default Navbar;