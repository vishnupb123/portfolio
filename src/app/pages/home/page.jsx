'use client'
import { useEffect } from "react";
import "../../styles/home.css";

// import Particles from "../../../../public/assets/videos/particles.mp4";
// import cloth from "../../../../public/assets/videos/cloth.mp4";

export default function HomeSection() {

 

  return (
    <section id="home" className="content-section">
      {/* Background Video */}
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="/assets/videos/cloth.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div className='hero-main-container'>
          <h3 className="hero-subtitle">Hello, I'm</h3>
      <svg id="logo">
        <text x="50%" y="75%" fill="transparent" textAnchor="middle">
          Vishnu PB
        </text>
      </svg>
      <h3 className="hero-subtitle-paragraph"><b>A Full-stack Developer and AI-ML Engineer</b> </h3>
    </div>
        <p className="intro-text">
          Explore my work, my skills, and what drives me to create impactful solutions.
        </p>

        {/* Scroll Down Button */}
        <div className="scroll-down-button-container">
        <a href="#about" className="scroll-down-button">
          <span>Scroll Down</span>
        </a>
        </div>
      </div>
    </section>
  );
}
