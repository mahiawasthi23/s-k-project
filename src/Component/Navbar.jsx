import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className='nav_logo'>
        <img src='/S_logo.png' alt="logo" />
      </div>
      <div className={`nav-contain ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link home">Home</Link>
        <Link to="/about" className="nav-link about">About</Link>
        <Link to="/gallary" className="nav-link gallary">Gallary</Link>
        <Link to="/service" className="nav-link service">Service</Link>
        <Link to="/contact" className="nav-link contact">Contact</Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
};

export default Navbar;


