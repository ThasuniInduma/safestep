import React from 'react';
import './Header.css';
import HomeImg from '../../assets/Home.png';

const Header = () => {
  return (
    <div className='hero-bg'>
      <div className='hero-content'>
        <div className='hero-left'>
          <h2>SafeStep<br/>asjhfsegtuxermxr</h2>
          <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
          <button>Download</button>
        </div>
        <div className='hero-right'>
          <img src={HomeImg} alt="Phone" className='hero-img' />
        </div>
      </div>
    </div>
  );
};

export default Header;
