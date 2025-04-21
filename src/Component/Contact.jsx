import '../Component/contact.css';
function Contact() {
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
              <i class="fa-solid fa-user"></i>
                <p>Customer Support: Gopal Mahasal</p>
              </div>
              <div className='contact-item'>
                <i className="fas fa-phone"></i>
                <p>Customer Support Phone: +919767520021</p>
              </div>
              <div className='contact-item'>
                <i className="fas fa-envelope"></i>
                <p>Email: sk.entrp1118@gmail.com</p>
              </div>
              <div className='contact-item'>
                <i className="fas fa-clock"></i>
                <p>Hours: Mon-Sat 9:30 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className='contact-form-container'>
            <h2 className="form-heading">Send Us a Message</h2>
            <form id="contact-form">
              <input type="text" name="name" placeholder='Your Name' />
              <input type="email" name="email" placeholder='Your Email' />
              <input type="number" name="phone" placeholder='Your Phone Number' />
              <select name="service"  className="select-option" required>
                <option className="option">Select Service Type</option>
                <option value="ac-repair" className="option">AC Repair</option>
                <option value="installation" className="option">Installation</option>
                <option value="other" className="option">Other</option>
              </select>
              <textarea name="message" placeholder='Describe Your Service Request' required></textarea>
              <button type="submit" className="text-btn">Send Message</button>
              <div id="message-container"></div>
            </form>
          </div>
        </div>
      </section>
      <section className="location-map">
        <h2 className="location-heading">Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3781.9243991575354!2d73.95804109999999!3d18.57744679999999!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1745211960599!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy"></iframe>
      </section>
    </>
  );
}
export default Contact;