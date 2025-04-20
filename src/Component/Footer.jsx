import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">SK ENTERPRISES</h2>
        <p className="footer-tagline">Empowering Your Business, One Step at a Time</p>
        
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} SK ENTERPRISES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
