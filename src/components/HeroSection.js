import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video2 from '../videos/video-2.mp4'

function HeroSection() {
  return <div className='hero-container'>
      <video src={video2} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
          <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
              GET STARTED
          </Button>
          <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
              WATCH TRAILER 
          </Button>
      </div>
  </div>;
}

export default HeroSection;
