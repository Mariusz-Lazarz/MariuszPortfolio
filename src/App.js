import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("div[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default App;
