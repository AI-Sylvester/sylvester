import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  useEffect(() => {
    const container = document.createElement("div");
    container.className = "sparks-container";
    document.body.appendChild(container);

    const sparkCount = 50;
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      spark.style.setProperty('--start-x', Math.random() * window.innerWidth + 'px');
      spark.style.setProperty('--start-y', window.innerHeight + 'px');
      spark.style.setProperty('--dx', (Math.random() * 100 - 50) + 'px');
      spark.style.setProperty('--dy', (Math.random() * 300 + 100) + 'px');
      spark.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(spark);
    }

    return () => {
      document.body.removeChild(container); // cleanup on unmount
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
