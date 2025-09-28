import React from 'react';
import './About.css';

// Steps data with inline SVG icons
const stepsData = [
  {
    number: '01',
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Open the App',
    description: 'Launch SafeStep with a single tap or voice command. The app is always ready when you need it most.',
  },
  {
    number: '02',
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.613 2.083l-1.996 2.077-1.042-1.042-2.008 2.086 1.04 1.04-2.006 2.084-1.042-1.04-2.008 2.086 1.04 1.04-2.006 2.084M12 21a9 9 0 01-9-9 9 9 0 0118 0 9 9 0 01-9 9z" />
      </svg>
    ),
    title: 'Activate SOS',
    description: 'Press the emergency button or say your voice command. Your location and alert are instantly transmitted.',
  },
  {
    number: '03',
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-4a2 2 0 01-2-2v-2h8v2a2 2 0 01-2 2zM12 11a4 4 0 100-8 4 4 0 000 8zm-5 6h10" />
      </svg>
    ),
    title: 'Alerts & Live Tracking',
    description: 'Emergency contacts receive your alert with live location tracking. Help is on the way automatically.',
  },
];

const Title = ({ text }) => (
  <div className="title-container">
    <h2 className="main-title">{text}</h2>
    <div className="title-underline"></div>
  </div>
);

const StepCard = ({ number, icon, title, description, isLast }) => (
  <div className="step-card">
    <div className="step-content">
      <div className="step-header">
        <span className="step-number">{number}</span>
        <div className="icon-circle">{icon}</div>
      </div>

      <div className="step-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>

    {!isLast && <div className="divider-line"></div>}
  </div>
);

const About = () => {
  return (
    <div className="about-section">
      <div className="header">
        <Title text="How SafeStep Works" />
        <p className="subtitle">Three simple steps between you and safety. It's that easy.</p>
      </div>

      <div className="steps-grid">
        {stepsData.map((step, index) => (
          <StepCard key={step.number} {...step} isLast={index === stepsData.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default About;
