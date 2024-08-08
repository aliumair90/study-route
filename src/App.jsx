import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Privacy from "./Privacy";
import Faq from "./Faq";
import OnlineConsultant from "./OnlineConsultant";
import About from "./About";
import StudyDestination from "./StudyDestination";
import Contact from "./Contact";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/study-destination" element={<StudyDestination />} />
          <Route path="/online-consultant" element={<OnlineConsultant />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
