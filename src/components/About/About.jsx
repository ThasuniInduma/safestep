import React from 'react';
import './About.css'

const About = () => {
  const stepsData = [
    {
      number: '01',
      icon: (
        <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Open the App',
      description: 'Launch SafeStep with a single tap or voice command. The app is always ready when you need it most.',
    },
    {
      number: '02',
      icon: (
        <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Activate SOS',
      description: 'Press the emergency button or say your voice command. Your location and alert are instantly transmitted.',
    },
    {
      number: '03',
      icon: (
        <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: 'Get Help Fast',
      description: 'Emergency contacts receive your alert with live location tracking. Help is on the way automatically.',
    },
  ];

  return (
    <div className="about-section"id='about-section'>
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="header-line"></div>
          <h2 className="about-title">Three simple steps between you and safety. It's that easy.</h2>
        </div>

        {/* Steps Section */}
        <div className="steps-container">
          {stepsData.map((step, index) => (
            <div key={step.number} className="step-item">
              <div className="step-number-large">{step.number}</div>
              <div className="step-icon-container">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < stepsData.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="about-video-container" style={{ marginTop: '80px', textAlign: 'center' }}>
          <iframe
            width="100%"
            style={{ maxWidth: '800px' }}
            height="450"
            src="https://www.youtube.com/embed/Ru54qU0_emc"
            title="SafeStep Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
