
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Templates from "./components/Templates";
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";
import Reviews from "./components/Reviews";
import "./styles/index.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/Templates.css";
import "./styles/Features.css";
import "./styles/Footer.css";
import "./styles/Reviews.css";
import "./styles/About.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <About/>
        <Templates />
        <Features />
        <Reviews />
        <Footer />
        </div>
    </Router>
  );
}

export default App;
