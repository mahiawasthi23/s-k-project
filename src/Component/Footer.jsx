import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">SK ENTERPRISES</h2>
        <p className="footer-para">Empowering Your Business, One Step at a Time</p>

        <ul className="socials-link">
          <li><a href="#" className="fab fa-facebook-f"></a></li>
          <li><a href="#" className="fab fa-twitter"></a></li>
          <li><a href="#" className="fab fa-google"></a></li>
          <li><a href="#" className="fab fa-youtube"></a></li>
        </ul>

        <div className="footer-menu">
        <ul className="f-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/gallary">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} SK ENTERPRISES. All rights reserved.</p>
    </footer>
  );
};


export default Footer;






