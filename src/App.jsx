import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Component/About.jsx'
import Navbar from "./Component/Navbar.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import Service from "./Component/Service.jsx";
import Home from "./Component/Home.jsx";
import Footer from "./Component/Footer.jsx";

function App(){
  return(
    <Router>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service/>} />
    </Routes>
  </Router>
  )
}
export default App;