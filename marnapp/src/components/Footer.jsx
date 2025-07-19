import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container text-center py-4">
        <div className="social-icons mb-3">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaXTwitter /></a>
        </div>
        <p className="footer-text">© 2025 BinaryBooks Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
