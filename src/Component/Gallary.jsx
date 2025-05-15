import React from "react";
import "./Gallary.css";

const galleryData = [
  {
    src: "/copper pipe1.jpg",
    alt: "Copper Pipe",
    title: "Copper pipe",
  },

  {
    src: "vrv.jpg",
    alt: "VRV AC",
    title: "VRV AC",
  },
  {
    src: "/ductable.jpg",
    alt: "AC Servicing",
    title: "AC Servicing",
  },
  {
    src: "/ACImage0.jpg",
    alt: "AC View",
    title: "AC View",
  },
  {
    src: "/ACImage1.jpg",
    alt: "AC Unit",
    title: "AC Unit",
  },
  {
    src: "ACImage5.jpg",
    alt: "Cassette AC View",
    title: "Cassette AC View",
  },
  {
    src: "ACImage6.jpg",
    alt: "Outdoor Unit Setup",
    title: "Outdoor Unit Setup",
  },
  {
    src: "/copper pipe2.jpg",
    alt: "AC Copper Tubes",
    title: "AC Copper Tubes",
  },
  {
    src: "ACImage7.jpg",
    alt: "Cassette AC Servicing",
    title: "Cassette AC Servicing",
  },
  {
    src: "ACImage8.jpg",
    alt: "AC Piping Work",
    title: "AC Piping Work",
  },
  {
    src: "ACImage9.jpg",
    alt: "AC Indoor Unit Installation ",
    title: "AC Indoor Unit Installation ",
  },
  {
    src: "ACImage12.jpg",
    alt: "Cassette AC Installation",
    title: "Cassette AC Installation",
  },
  {
    src: "cassette2.jpg",
    alt: "Cassette AC ",
    title: "Cassette AC ",
  },
  {
    src: "/copper pipe5.jpg",
    alt: "High-Quality Piping",
    title: "High-Quality Piping",
  },
  {
    src: "cassette1.jpg",
    alt: "View Cassette AC ",
    title: "View Cassette AC ",
  },
  {
    src: "copper pipe3.jpg",
    alt: "Durable Cooling Pipes",
    title: "Durable Cooling Pipes",
  },
  {
    src: "copper pipe4.jpg",
    alt: "Long-Lasting Pipes",
    title: "Long-Lasting Pipes",
  },
  {
    src: "vrv2.jpg",
    alt: "VRV AC",
    title: "VRV AC",
  },
  {
    src: "servicing22.jpg",
    alt: "Maintenance Service",
    title: "Maintenance Service",
  },
  
  {
    src: "vrf1.jpg",
    alt: "VRF AC",
    title: "VRF AC",
  },
  {
    src: "vrv.jpg",
    alt: "VRV system",
    title: "VRV system",
  },
  {
    src: "vrf2.jpg",
    alt: "VRF air conditioner",
    title: "VRF air conditioner",
  },
  {
    src: "ductable2.jpg",
    alt: " Tower AC Maintenance Service",
    title: " Tower AC Maintenance Service",
  },
  {
    src: "4ac.jpg",
    alt: "Out Door Unit Setup",
    title: "Out Door Unit Setup",
  },

];

const Gallary = () => {
  return (
    <div className="gallery-page">
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Feel the Cool Comfort</h1>
          <p>Your comfort is our priority. Reliable AC services that you can trust.</p>
        </div>
      </div>

      <div className="gallery-wrapper">
        <h2 className="fade-in">Our AC Service Gallery</h2>
        <div className="gallery fade-in">
          {galleryData.map((item, index) => (
            <div className="gallery-item zoom-in" key={index}>
              <img src={item.src} alt={item.alt} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;


