import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5l-6.928-12c-.77-.833-1.732-.833-2.5 0l-6.928 12c-.77.833.192 2.5 1.768 2.5z" />
        </svg>
      ),
      title: 'One-Tap SOS & Voice Activation',
      description: 'Instantly notify emergency contacts and authorities with a single tap or voice command. Quick, reliable, and potentially life-saving.',
      iconColor: '#8b5cf6'
    },
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Live Location Sharing & Tracking',
      description: 'Share your real-time location with trusted contacts. Let them follow your journey and know you\'re safe every step of the way.',
      iconColor: '#10b981'
    },
    
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Fake Call / Discreet Alert',
      description: 'Receive a fake incoming call to help you escape uncomfortable situations safely and discreetly without drawing attention.',
      iconColor: '#8b5cf6'
    },
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Nearby Police & Safe Zones Finder',
      description: 'Find the nearest police stations, hospitals, and safe zones in your area. Navigate to safety when you need it most.',
      iconColor: '#10b981'
    },
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Data & Tamper-Proof Evidence',
      description: 'End-to-end encryption ensures your personal information and evidence remain secure with tamper-proof integrity.',
      iconColor: '#3b82f6'
    },
    {
      icon: (
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'Emergency Helpline Access',
      description: 'Direct access to emergency helplines and 24/7 support services. Professional help is always just one tap away.',
      iconColor: '#06b6d4'
    }
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Powerful Features for Your Protection</h2>
          <div className="title-underline"></div>
          <p className="services-subtitle">
            Every feature is thoughtfully designed to enhance your safety and give you confidence in any situation.
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container" style={{ color: service.iconColor }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;