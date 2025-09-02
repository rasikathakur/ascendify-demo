import React from 'react';
import ParticleAnimation from '../ParticleAnimation/ParticleAnimation';
import './HeroSection.css';

function HeroSection() {
  return (
    <main className="hero-section">
      <div className="background-animations" id="background-animations">
        <ParticleAnimation />
      </div>
      <div className="container hero-content">
        <h1>Ascendify – Elevate your skills, amplify your career.</h1>
        <p>Discover your path. Build your skills. Land your dream role with AI-powered guidance.</p>
        <div className="cta-buttons">
          <button className="btn primary-btn">Start Free Career Assessment</button>
          <button className="btn secondary-btn">Explore Skill Roadmaps</button>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;