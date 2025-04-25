import React from 'react'
import { useState } from 'react';
import '../Component/About.css'

function About  () {

    const [activeContent, setActiveContent] = useState('');

    const handleClick = (type) => {
      if (type === 'vision') {
        setActiveContent("To be the most trusted and comprehensive home service provider, known for our quality, integrity, and innovative solutions.");
      } if (type === 'mission') {
        setActiveContent("To deliver exceptional home services that exceed customer expectations through skill, reliability, and customer-first approach.");
      } else if (type === 'value') {
        setActiveContent("At SK Enterprises, our core values are integrity, commitment to quality, customer satisfaction, and innovation in every service we provide.");
      }
    }
  return (
    <>
    <main className='main-about'>
        <div className='about-details'>
            <h1>You Can Trust</h1>
            <p>Builds customer confidence... </p>
        </div>
    </main>

    <div className='about-container'> 
        <div className='about-your'>
            <h2>Who We Are</h2>
            <p>SK Enterprises was founded in 2010 with a simple mission: to provide reliable, efficient, and affordable home repair and installation services. What started as a small local business has grown into a trusted name in home maintenance.</p>
        </div>
        <div className='about-image'>
            <img src='/image AC.png' className='images'></img>
        </div>
    </div>



    <div className='mission-container'>
      <div className='mission-home'>
        <p>Our Mission </p>
      </div>
      <div className='about-miision-item'>
        <div className='mission-item-row'>

          <div className='mission-item-col' >
            <div className='about-mission-data'>
            <i className="about-mission-icon">
              <img src="/swift.png" alt="Download icon" />
            </i>
              <h3>Swift</h3>
              <p>Quick Repair</p>
              <p>Immediate Response</p>
              <p>Timely Support</p>
            </div>
          </div>

          <div className='mission-item-col' >
            <div className='about-mission-data'>
            <i className="about-mission-icon">
              <img src="/Professional.png" alt="Download icon" />
            </i>
              <h3>Professional</h3>
              <p>Professional service</p>
              <p>Professional techniques</p>
              <p>Professional management</p>
            </div>
          </div>

          <div className='mission-item-col' id='realiable'>
            <div className='about-mission-data'>
            <i className="about-mission-icon">
              <img src="/Reliable.png" alt="Download icon" />
            </i>
              <h3>Reliable</h3>
              <p>Original parts</p>
              <p>High quality</p>
              <p>Fair price</p>
            </div>
          </div>

          <div className='mission-item-col' id='valuable'>
            <div className='about-mission-data'>
            <i className="about-mission-icon">
              <img src="/valuable.png" alt="Download icon" />
            </i>
              <h3>Valuable</h3>
              <p>Satisfying</p>
              <p>Humanistic</p>
              <p>Value-added</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   <section className='team-section'>
    <h2 className='team-heading'>We're Here to Keep You Cool & Comfortable</h2>
    <div className='team-container'>
    <div className='team-member'>
        <div className='team-text'>
        <p>With years of experience and a commitment to quality, SK Enterprises has earned the trust of hundreds of satisfied customers. We provide reliable and efficient AC services, ensuring comfort and peace of mind for every client</p>
        </div>
        <h2>Trusted</h2>
      </div>

      <div className='team-member'>
        <div className='team-text'>
        <p>Our team of certified and skilled technicians is trained to handle all types of AC systems. From minor repairs to complete servicing, we ensure every job is done with precision and care.</p>
        </div>
        <h2>Expert Technicians</h2>
      </div>

      <div className='team-member'>
        <div className='team-text'>
        <p>We value your time and comfort. That's why SK Enterprises offers prompt service and quick response times, ensuring your AC is back up and running when you need it the most.</p>
        </div>
        <h2>Fast & Reliable Service</h2>
      </div>
    </div>
   </section>
    </>
  )
}
export default About
