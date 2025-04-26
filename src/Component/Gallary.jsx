import React from "react";
import "./Gallary.css";

const galleryData = [
  {
    src: "/AC2.jpg",
    alt: "AC Installation",
    title: "AC Installation",
  },
  {
    src: "/AC3.jpg",
    alt: "Maintenance Check",
    title: "Maintenance Check",
  },
  {
    src: "/AC4.avif",
    alt: "Filter Cleaning",
    title: "Filter Cleaning",
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


