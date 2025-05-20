import { useState } from 'react';
import '../Component/contact.css';

function Contact() {
  const [rotateMain, setRotateMain] = useState(false);
  const [rotateSub, setRotateSub] = useState(false);
  const [selectedMain, setSelectedMain] = useState('');
  const subOptions = {
    'ac-repair': [
      'Air filter cleaning',
      'Cooling coil cleaning',
      'Gas pressure check',
      'Compressor replacement',
      'Cooling/condenser coil repair'
    ],
    'installation': [
      'Split AC Installation',
      'Cassette AC Installation',
      'Ductable AC Installation',
      'VRV / VRF Installation',
      'AHU Copper Piping Installation'
    ],
    'Other Services': [
      'Gas charging',
      'Leak rectification',
      'Compressor replacement',
      'Cooling/condenser coil repair',
      'Motor replacement'
    ]
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Message submited successfully!');
      event.target.reset(); 
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Something went wrong!');
    });
  };

  return (
    <>
      <main className='contact-hero'>
        <div className='contact-info-content'>
          <h2 className='contact-heading'>Get In Touch</h2>
          <p className='contact-para'>We're Here to Help You...</p>
        </div>
        <div className='img-container'>
          <img src="/contact.png" alt="Contact" />
        </div>
      </main>
      <section className='contact-section'>
        <div className='contact-container'>
          <div className='contact-info'>
            <h2 className="contact-data">Contact Details</h2>
            <div className='contact-details'>
              <div className='contact-item'>
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Service Street, Repair City, RC 12345</p>
              </div>
              <div className='contact-item'>
                <i className="fa-solid fa-user"></i>
                <p>Customer Support: Gopal Mahasal</p>
              </div>
              <div className='contact-item'>
                <i className="fas fa-phone"></i>
                <p>Customer Support Phone: +919767520021</p>
              </div>
              <div className='contact-item'>
                <i className="fas fa-envelope"></i>
                <a href="mailto:sk.entrp1118@gmail.com">Email: sk.entrp1118@gmail.com</a>
              </div>
              <div className='contact-item'>
                <i className="fas fa-clock"></i>
                <p>Hours: Mon-Sat 9:30 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className='contact-form-container'>
            <h2 className="form-heading">Fill in your AC repair requirement!</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="05a455fd-09bd-4e65-856c-83f52a686f42"/> 
              <input type="text" name="name" placeholder='Your Name' required />
              <input type="email" name="email" placeholder='Your Email' required />
              <input type="number" name="phone" placeholder='Your Phone Number' required />
              <div className="select-wrapper">
                <select
                  name="service"
                  className="select-option"
                  required
                  onChange={(e) => setSelectedMain(e.target.value)}
                  onClick={() => setRotateMain(!rotateMain)}
                >
                  <option value="">Select Service Type</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="installation">Installation</option>
                  <option value="other">Other Services</option>
                </select>
                <i className={`fa-solid fa-chevron-down dropdown-icon ${rotateMain ? 'rotate' : ''}`}></i>
              </div>
              {selectedMain && (
                <div className="select-wrapper">
                  <select
                    name="sub-service"
                    className="select-option"
                    required
                    onClick={() => setRotateSub(!rotateSub)}
                  >
                    <option value="">Select Sub-Service</option>
                    {subOptions[selectedMain].map((sub, index) => (
                      <option key={index} value={sub}>{sub}</option>
                    ))}
                  </select>
                  <i className={`fa-solid fa-chevron-down dropdown-icon ${rotateSub ? 'rotate' : ''}`}></i>
                </div>
              )}
              <textarea name="message" placeholder='Describe Your Service Request' required></textarea>
              <button type="submit" className="text-btn">Send Message</button>
              <div id="message-container"></div>
            </form>
          </div>
        </div>
      </section>
      <section className="location-map">
        <h2 className="location-heading">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3781.9243991575354!2d73.95804109999999!3d18.57744679999999!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1745211960599!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
export default Contact;
