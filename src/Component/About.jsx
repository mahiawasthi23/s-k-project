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

    <div className='about-container2'> 
        <div className='about-miss-viss'>
            <div className='about-miss-viss-details'>
                <ul>
                    <li onClick={() => handleClick('vision')}>Vision</li>
                    <li onClick={() => handleClick('mission')}>Mission</li>
                    <li onClick={() => handleClick('value')}>Value</li>
                </ul>
            </div>
            <h3>Since 2018, providing quality home and commercial services with a commitment to excellence and customer satisfaction.
            Gopal Mahasal</h3>
            {/* <p>SK Enterprises was founded in 2010 with a simple mission: to provide reliable, efficient, and affordable home repair and installation services. What started as a small local business has grown into a trusted name in home maintenance.</p> */}

                {activeContent && (
                <div className='about-dynamic-text'>
                    <p>{activeContent}</p>
                </div>
                )}
        </div>
        <div className='about-image'>
            <img src='/image.png' className='images2'></img>
        </div>
    </div>
    </>
  )
}


export default About
