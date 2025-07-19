import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/aboutbook.jpg'; // Use any book image you want

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Books" />
        </div>
        <div className="about-text">
          <h2>BinaryBooks</h2>
          <p>
            Welcome to BinaryBooks – your digital gateway to a world of stories, comics, biographies, and psychological wonders.
            Our mission is to make reading fun, engaging, and accessible to everyone. Whether you're a casual reader or a
            passionate bibliophile, we’ve got something special for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
