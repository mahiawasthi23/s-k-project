import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src='/logo.png'/>
        <div className='nav-contain'>
        <Link to="/" className="nav-link home">Home</Link>
        <Link to="/about"  className="nav-link about">About</Link>
        <Link to="/gallary"  className="nav-link gallary">Gallary</Link>
        <Link to="/service"  className="nav-link service">Service</Link>
        <Link to="/contact" className="nav-link contact">Contact</Link>
        </div>
    </nav>
  );
};
export default Navbar;
