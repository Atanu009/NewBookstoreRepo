// import React from 'react';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PopularBooks from '../components/PopularBooks';
import BooksSection from '../components/BooksSection';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div id='about'><AboutSection /></div>
       <PopularBooks />
       <BooksSection />
       <FeedbackSection />
      <Footer />
    </div>
  );
}
