import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <div className="mobile-app-container">
      {/* Decorative dots */}
      <div className="dot dot-purple-top"></div>
      <div className="dot dot-green-right"></div>
      <div className="dot dot-orange-left"></div>
      <div className="dot dot-blue-bottom"></div>
      
      <div className="content-wrapper">
        {/* Left side - Text content */}
        <div className="text-content">
          <h2 className="main-title">
            Discover the Benefits of Our New Mobile App
          </h2>
          
          <p className="description">
            Our mobile app is designed with user-friendliness in mind. Its intuitive interface allows you to 
            navigate through our extensive range of pharmaceutical products effortlessly.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-number">01</span>
              <span className="feature-text">Fast and Reliable</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-number">02</span>
              <span className="feature-text">Visually Appealing Design</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-number">03</span>
              <span className="feature-text">Easy to Use</span>
            </div>
          </div>
          
          <div className="download-buttons">
            <a href="#" className="download-btn google-play">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                   alt="Get it on Google Play" />
            </a>
            <a href="#" className="download-btn app-store">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                   alt="Download on the App Store" />
            </a>
          </div>
        </div>
        
        {/* Right side - Phone mockups */}
        <div className="phones-container">
          <div className="phone-mockup phone-back">
            <div className="phone-screen">
              <div className="screen-header">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="battery-wifi">
                    <span>●●●</span>
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header">
                  <span className="back-arrow">←</span>
                  <span className="header-title">Health App</span>
                </div>
              </div>
              <div className="screen-content">
                <div className="profile-section">
                  <div className="profile-avatar"></div>
                  <div className="profile-info">
                    <div className="profile-name"></div>
                    <div className="profile-details"></div>
                  </div>
                </div>
                <div className="menu-items">
                  <div className="menu-item"></div>
                  <div className="menu-item"></div>
                  <div className="menu-item"></div>
                  <div className="menu-item"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="phone-mockup phone-front">
            <div className="phone-screen">
              <div className="screen-header">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="battery-wifi">
                    <span>●●●</span>
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header blue-header">
                  <span className="header-title">Dashboard</span>
                  <span className="profile-icon">👤</span>
                </div>
              </div>
              <div className="screen-content blue-content">
                <div className="dashboard-grid">
                  <div className="grid-item">🏠</div>
                  <div className="grid-item">💊</div>
                  <div className="grid-item">📋</div>
                  <div className="grid-item">⚕️</div>
                  <div className="grid-item">📞</div>
                  <div className="grid-item">🔍</div>
                  <div className="grid-item">⚙️</div>
                  <div className="grid-item">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;