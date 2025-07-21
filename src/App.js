import React, { useState } from 'react'; 
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const toggleBtn = document.querySelector(".theme-toggle");

  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide
    toggleBtn.classList.add("hide");
  } else {
    // Scrolling up → show
    toggleBtn.classList.remove("hide");
  }

  lastScrollY = window.scrollY;
});


  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <main>
        <Header />
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}