import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='nav-contain'>
        <Link to="/" style={{marginRight:20}} className="nav-link home">Home</Link>
        <Link to="/about" style={{marginRight:20}} className="nav-link about">About</Link>
        <Link to="/gallary" style={{marginRight:20}} className="nav-link gallary">Gallary</Link>
        <Link to="/service" style={{marginRight:20}} className="nav-link service">Service</Link>
        <Link to="/contact" style={{marginRight:60}} className="nav-link contact">Contact</Link>
        </div>
    </nav>
  );
};
export default Navbar;
