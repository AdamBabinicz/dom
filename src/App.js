import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Children from "./components/pages/Children";
import Family from "./components/pages/Family";
import House from "./components/pages/House";
import Gang from "./components/pages/Gang";
import Dzidka from "./components/pages/Dzidka";
import Adam from "./components/pages/Adam";
import Ania from "./components/pages/Ania";
import Ela from "./components/pages/Ela";
import Footer from "./components/Footer";
import Modal from "./components/modal/Modal";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/children" element={<Children />} />
        <Route path="/family" element={<Family />} />
        <Route path="/house" element={<House />} />
        <Route path="/gang" element={<Gang />} />
        <Route path="/dzidka" element={<Dzidka />} />
        <Route path="/adam" element={<Adam />} />
        <Route path="/ania" element={<Ania />} />
        <Route path="/ela" element={<Ela />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
