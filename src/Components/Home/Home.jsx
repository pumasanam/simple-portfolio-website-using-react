import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About title='Developer & Designer'/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
