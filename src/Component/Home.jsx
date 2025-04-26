import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
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
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('https://s-k-backend-project-1.onrender.com/api/feedbacks');
      setStoredFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const handleStarClick = (star) => {
    setSelectedRating(star);
  };

  const submitFeedback = async () => {
    if (selectedRating === 0 || feedbackText.trim() === '' || userName.trim() === '') {
      alert('Please fill out all fields and select a rating.');
      return;
    }

    try {
      await axios.post('https://s-k-backend-project-1.onrender.com/api/feedbacks', {
        name: userName,
        rating: selectedRating,
        text: feedbackText,
      });

      setUserName('');
      setSelectedRating(0);
      setFeedbackText('');
      fetchFeedbacks();
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? 'gold' : 'gray' }}>★</span>
    ));
  };

  return (
    <>
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
            <img src="/AC4.jpg" alt="Work 3" />
            <img src="/AC3.jpg" alt="Work 4" />
            <img src="/AC4.avif" alt="Work 5" />
            <img src="/ACImage1.jpg" alt="Work 6" />
          </div>
          <Link to="/gallary">
            <button className="home-learn-more">See More</button>
          </Link>
        </div>

<div className="home-rating-section">
  <div className='home-feedback_section'>
  <h2 className="home-section-title">Rate Our Services</h2>
  <div className="home-feedback-name">
    <label className='l'>Name:</label>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className="home-name-input"
      placeholder="Enter your name"
    />
  </div>

  <div className="home-rating-block">
    <div className="home-rating-stars">
    <label>Rate us:</label>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          className={`star ${star <= selectedRating ? 'selected' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  </div>

  <div className="home-feedback-textarea">
    <label className='l'>Feedback:</label>
    <textarea
      value={feedbackText}
      onChange={(e) => setFeedbackText(e.target.value)}
      className="home-feedback-text"
      placeholder="Write your feedback here..."
    ></textarea>
  </div>

  <button className="home-learn-more" onClick={submitFeedback}>
    Submit Feedback
  </button>
  </div>
 
  <div className='home-feedback_section'>
  <h3 className="home-section-title">Recent Feedback</h3>
  <div className='home-choose-us'>
  {(showAllFeedbacks ? storedFeedbacks : storedFeedbacks.slice(0, 3)).map((feedback, index) => (
    <div key={index} className="home-choose-card">
      <div>
        <strong>{feedback.name}</strong> ({new Date(feedback.date).toLocaleDateString()})
      </div>
      <div className="home-testimonial-stars">{renderStars(feedback.rating)}</div>
      <p>{feedback.text}</p>
    </div>
  ))}
 </div>
  {storedFeedbacks.length > 3 && (
    <button className="home-toggle-feedback-button" onClick={() => setShowAllFeedbacks(!showAllFeedbacks)}>
      {showAllFeedbacks ? 'Show Less' : 'Show More'}
    </button>
  )}
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
    </>
  );
};

export default Home;
