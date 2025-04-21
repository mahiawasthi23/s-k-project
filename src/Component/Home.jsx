import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const services = [
    { icon: '🌬️', title: 'AC Repair' },
    { icon: '🔧', title: 'Split/Duct AC Installation' },
    { icon: '🧪', title: 'Gas Charging & Leak Fix' },
    { icon: '💨', title: 'Cassette AC Maintenance' },
  ];

  const testimonials = [
    { name: 'Ravi S.', text: 'Great service! My AC was fixed in 2 hours.' },
    { name: 'Anjali P.', text: 'Quick and affordable. Highly recommended!' },
  ];

  return (
    <div className="home-contener">
      <div className="home-main">
        <div className="para">
          <h1>SK Enterprises</h1>
          <p>Your Trusted Home and Commercial Service Partner</p>
        </div>
        <Link to="/service" className="home-service">
          <button className="home-learn-service">Explore Our Services</button>
        </Link>
      </div>

      <div className="home-intro">
        <h2 className='home-section-title'>About Us</h2>
        <p>
          We provide expert AC services for residential and commercial spaces across the city. From installations to repairs, we ensure comfort and quality.
        </p>
        <Link to="/about">
          <button className="home-learn-more">Learn More</button>
        </Link>
      </div>

      <h2 className="home-section-title">Our Key Services</h2>
      <div className="home-service-grid">
        {services.map((service, index) => (
          <div key={index} className="home-service-card">
            <i className="home-choose-icon">{service.icon}</i>
            <h3>{service.title}</h3>
            <Link to="/service">
              <button className="home-learn-more">Learn More</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="choose-us-section">
      <h2 className="home-section-title">Why Choose Us</h2>
<div className="home-choose-us">
  <div className="home-choose-card">
    <i className="home-choose-icon">✅</i>
    <h4>Trusted Technicians</h4>
    <p>Experienced and background-verified service professionals.</p>
  </div>
  <div className="home-choose-card">
    <i className="home-choose-icon">⚡</i>
    <h4>Quick Response</h4>
    <p>Fast and efficient service scheduling with real-time support.</p>
  </div>
  <div className="home-choose-card">
    <i className="home-choose-icon">💰</i>
    <h4>Affordable Prices</h4>
    <p>High-quality service at budget-friendly rates.</p>
  </div>
  <div className="home-choose-card">
    <i className="home-choose-icon">🛡️</i>
    <h4>Service Guarantee</h4>
    <p>We stand by our work with a service warranty.</p>
  </div>
</div>
</div>

      <div className="home-gallery-preview">
        <h2 className='home-section-title'>Gallery</h2>
        <div className="home-gallery-grid">
          <img src="/AC.jpg" alt="Work 1" />
          <img src="/AC.jpg" alt="Work 2" />
          <img src="/AC.jpg" alt="Work 3" />
          <img src="/AC.jpg" alt="Work 1" />
          <img src="/AC.jpg" alt="Work 2" />
          <img src="/AC.jpg" alt="Work 3" />
        </div>
        <Link to="/gallary">
          <button className="home-learn-more">See More</button>
        </Link>
      </div>

      <div className="home-testimonials">
        <h2 className='home-section-title'>What Our Customers Say</h2>
        <div className="home-testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="home-testimonial">
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="home-cta-strip">
        <h3>Need AC Service Now?</h3>
        <p>Call us at <strong>+91-9767520021</strong></p>
        <Link to="/contact">
          <button className="home-learn-more">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

