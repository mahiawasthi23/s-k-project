import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const services = [
    { icon: '🌬️', title: 'AC Repair' },
    { icon: '🔧', title: 'Split/Duct AC Installation' },
    { icon: '🧪', title: 'Gas Charging & Leak Fix' },
    { icon: '💨', title: 'Cassette AC Maintenance' },
  ];

  const [selectedRating, setSelectedRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [userName, setUserName] = useState('');
  const [storedFeedbacks, setStoredFeedbacks] = useState([]);
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setStoredFeedbacks(saved);
  }, []);

  const handleStarClick = (star) => {
    setSelectedRating(star);
  };

  const submitFeedback = () => {
    if (selectedRating === 0 || feedbackText.trim() === '' || userName.trim() === '') {
      alert('Please fill out all fields and select a rating.');
      return;
    }
    const newFeedback = {
      name: userName,
      rating: selectedRating,
      text: feedbackText,
      date: new Date().toLocaleString()
    };

    const updatedFeedbacks = [...storedFeedbacks, newFeedback];
    setStoredFeedbacks(updatedFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
    setFeedbackText('');
    setUserName('');
    setSelectedRating(0);
    alert('Thank you for your feedback!');
  };

  const displayedFeedbacks = showAllFeedbacks
    ? [...storedFeedbacks].reverse()
    : [...storedFeedbacks].slice(-3).reverse();

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
          <img src="/AC2.jpg" alt="Work 2" />
          <img src="/AC.jpg" alt="Work 3" />
          <img src="/AC3.jpg" alt="Work 4" />
          <img src="/AC4.avif" alt="Work 5" />
          <img src="/AC.jpg" alt="Work 6" />
        </div>
        <Link to="/gallary">
          <button className="home-learn-more">See More</button>
        </Link>
      </div>

      <div className="home-testimonials">
        <h2 className="home-section-title">What Our Customers Say</h2>
        <div className="home-testimonial-grid">
          {displayedFeedbacks.map((item, index) => (
            <div key={index} className="home-testimonial">
              <p>"{item.text}"</p>
              <p className="testimonial-stars">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </p>
              <h4>- {item.name}</h4>
              <small>{item.date}</small>
            </div>
          ))}
        </div>

        {storedFeedbacks.length > 3 && (
          <button
            className="home-learn-more"
            onClick={() => setShowAllFeedbacks(!showAllFeedbacks)}
          >
            {showAllFeedbacks ? 'Show Less' : 'See More'}
          </button>
        )}

        <div className="home-rating-section">
          <h3 className="home-section-title">Rate Our Service</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            className="home-name-input"
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="rating-stars" id="star-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                data-star={star}
                className={`star ${selectedRating >= star ? 'selected' : ''}`}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            id="feedbackText"
            placeholder="Write your feedback here..."
            className="home-feedback-text"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>

          <button onClick={submitFeedback} className="home-learn-more">
            Submit Feedback
          </button>
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
