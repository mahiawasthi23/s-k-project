import React from "react";
import "./Gallary.css";

const galleryData = [
  {
    src: "/AC2.jpg",
    alt: "AC Installation",
    title: "AC Installation",
  },

  {
    src: "vrvAC2.jpeg",
    alt: "VRV AC",
    title: "VRV AC",
  },
  {
    src: "/AC4.jpg",
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
    src: "/AC4.avif",
    alt: "Filter Cleaning",
    title: "Filter Cleaning",
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
    src: "cassette 2.jpeg",
    alt: "Cassette AC ",
    title: "Cassette AC ",
  },
  {
    src: "/AC3.jpg",
    alt: "Maintenance Check",
    title: "Maintenance Check",
  },
  {
    src: "cassette AC.jpg",
    alt: "View Cassette AC ",
    title: "View Cassette AC ",
  },
  {
    src: "split2AC.jpeg",
    alt: "Split AC unit",
    title: "Split AC unit",
  },
  {
    src: "AC.jpeg",
    alt: "Recharge AC Guide",
    title: "Recharge AC Guide",
  },
  {
    src: "towerAC.jpeg",
    alt: "Standing AC",
    title: "Standing AC",
  },
  {
    src: "towerAC2.jpeg",
    alt: "Tower air conditioner",
    title: "Tower air conditioner",
  },
  {
    src: "splitAC.jpeg",
    alt: "Wall AC",
    title: "Wall AC",
  },
  {
    src: "vrfAC.jpeg",
    alt: "VRF AC",
    title: "VRF AC",
  },
  {
    src: "vrvAC.jpeg",
    alt: "VRV system",
    title: "VRV system",
  },
  {
    src: "vrfAC2.jpeg",
    alt: "VRF air conditioner",
    title: "VRF air conditioner",
  },
  {
    src: "tower3.jpeg",
    alt: " Tower AC Maintenance Service",
    title: " Tower AC Maintenance Service",
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


