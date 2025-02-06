import React from 'react';
import '../CSS/Home.css';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import SpecialsSection from './SpecialsSection';
import Testimonials from './Testimonials';

function Home() {
  return (
    <>
        <Header/>
        <SpecialsSection/>
        <Testimonials/>
        <About/>
        <Footer/>
    </>
  );
}

export default Home;