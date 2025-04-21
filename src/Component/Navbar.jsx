import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='nav-contain'>
        <Link to="/" style={{marginRight:20} } className='home'>Home</Link>
        <Link to="/about" style={{marginRight:20}} className='about'>About</Link>
        <Link to="/contact" style={{marginRight:20}} className='contact'>Contact</Link>
        <Link to="/service" style={{marginRight:60}} className='service'>Service</Link>
        </div>
    </nav>
  );
};
export default Navbar;
