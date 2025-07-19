import React from 'react';
import './HeroSection.css';
import herobook from '../assets/herobook.jpg'; // Make sure the path is correct

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${herobook})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1>BinaryBooks</h1>
          <p>Discover, Read, and Grow – Your one-stop bookstore for story, comic, biopic & more.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
