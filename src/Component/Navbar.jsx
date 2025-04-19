import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"



const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{marginRight:20}}>Home</Link>
      <Link to="/about" style={{marginRight:20}}>About</Link>
      <Link to="/contact" style={{marginRight:20}}>Contact</Link>
      <Link to="/service" style={{marginRight:60}}>Service</Link>
      
    </nav>
  );
};

export default Navbar;
