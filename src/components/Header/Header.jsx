import React, { useState } from 'react';
import './Header.css';
import HomeImg from '../../assets/Home.png';
import { assets } from '../../assets/assets';

const Header = () => {
  const [menu, setMenu] = useState("home")
  
  return (
    <div className='hero-bg'>
      <div className='hero-content'>
        <div className='hero-left'>
          <h2 className='header1'>SafeStep</h2>
          <h2 className='header2'>" Stay Fearless, Live Free "</h2>
          <p>SafeStep is a smart safety app designed for women in Sri Lanka. With features like offline SOS, live location sharing, fake call simulation, and AI-powered risk detection, SafeStep acts like a guardian angel that is always with you. Built on reliable mSpace APIs, it helps women stay safe, connected, and confident  anytime, anywhere.</p>
          <button onClick={() => {document.getElementById("mobile")?.scrollIntoView({ behavior: "smooth" });setMenu("mobile");}} className={menu === "mobile" ? "active" : ""}>Get App</button>
        </div>
        <div className='hero-right'>
          <img src={assets.img4} alt="Phone" className='hero-img' />
        </div>
      </div>
    </div>
  );
};

export default Header;