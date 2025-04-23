import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className='nav_logo'>
        <img src='/SK_logo.png' alt="logo" />
      </div>
      <div className={`nav-contain ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link home" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-link about" onClick={closeMenu}>About</Link>
        <Link to="/gallary" className="nav-link gallary" onClick={closeMenu}>Gallary</Link>
        <Link to="/service" className="nav-link service" onClick={closeMenu}>Service</Link>
        <Link to="/contact" className="nav-link contact" onClick={closeMenu}>Contact</Link>
      </div>
      <button className={`hamburger ${menuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
};
export default Navbar;


