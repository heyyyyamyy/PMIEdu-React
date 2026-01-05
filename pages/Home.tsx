import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Courses from '../components/Courses';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Courses />
    </>
  );
};

export default Home;