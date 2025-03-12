import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // ✅ Import App.css
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Certification from "./Components/Certification";
import Specialization from "./Components/Specialization"; // ✅ Import Specialization

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/specialization" element={<Specialization />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
};

export default App;
