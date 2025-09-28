import React from 'react'
import { assets } from '../../assets/assets';
import "./MobileApp.css";


const MobileApp = () => {
  return (
    <section className="app-section">
      <div className="app-content">
        <h2 className="app-title">
          Discover the Benefits of Our New Mobile App
        </h2>
        <p className="app-description">
          Our mobile app is designed with user-friendliness in mind. Its intuitive interface 
          allows you to navigate through our extensive range of pharmaceutical products effortlessly.
        </p>

        <ul className="app-features">
          <li>
            <span className="feature-badge pink">01</span>
            Fast and Reliable
          </li>
          <li>
            <span className="feature-badge blue">02</span>
            Visually Appealing Design
          </li>
          <li>
            <span className="feature-badge orange">03</span>
            Easy to Use
          </li>
        </ul>

        <div className="store-buttons">
          <img
            src={assets.img1}
            alt="Google Play"
            className="store-btn"
          />
          <img
            src={assets.img2}
            alt="App Store"
            className="store-btn"
          />
        </div>
      </div>

      <div className="app-images">
        <img src={assets.img2} alt="App screen 1" className="phone phone1" />
        <img src={assets.img2} alt="App screen 2" className="phone phone2" />
      </div>
    </section>
  );
}

export default MobileApp
