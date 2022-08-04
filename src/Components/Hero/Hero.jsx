import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_list">
            <h2>PORTFOLIO WEBSITE</h2>
            <h3>I Am Web Developer</h3>

            <div className="hero_btn">
                <button className='white'>Hire Me</button>
                <button className='black'>Download CV</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
