import React from 'react';

const stepsData = [
  {
    number: '01',
    // Using inline SVG for the icon - Mobile phone
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Open the App',
    description: 'Launch SafeStep with a single tap or voice command. The app is always ready when you need it most.',
  },
  {
    number: '02',
    // Using inline SVG for the icon - Shield
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.613 2.083l-1.996 2.077-1.042-1.042-2.008 2.086 1.04 1.04-2.006 2.084-1.042-1.04-2.008 2.086 1.04 1.04-2.006 2.084M12 21a9 9 0 01-9-9 9 9 0 0118 0 9 9 0 01-9 9z" />
      </svg>
    ),
    title: 'Activate SOS',
    description: 'Press the emergency button or say your voice command. Your location and alert are instantly transmitted.',
  },
  {
    number: '03',
    // Using inline SVG for the icon - Users/Group
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-4a2 2 0 01-2-2v-2h8v2a2 2 0 01-2 2zM12 11a4 4 0 100-8 4 4 0 000 8zm-5 6h10" />
      </svg>
    ),
    title: 'Alerts & Live Tracking',
    description: 'Emergency contacts receive your alert with live location tracking. Help is on the way automatically.',
  },
];

const Title = ({ text }) => {
  return (
    <div className="title-container">
      <h2 className="main-title">
        {text}
      </h2>
      <div className="title-underline"></div>
    </div>
  );
};

const StepCard = ({ number, icon, title, description, isLast }) => (
  <div className="step-card">
    <div className="step-content">
      <div className="step-header">
        <span className="step-number">{number}</span>
        
        {/* Icon Circle */}
        <div className="icon-circle">
          {icon}
        </div>
      </div>
      
      <div className="step-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
    
    {/* Divider */}
    {!isLast && (
      <div className="divider-line"></div>
    )}
  </div>
);

const About = () => {
  return (
    <div className="about-section">
      <style>{`
        /* --- Variables --- */
        :root {
            --primary-purple: #5b50e6;
            --secondary-teal: #6dacec;
            --text-dark: #333;
            --text-light: #666;
            --background-light: #f9f9f9;
            --border-color: #e5e7eb;
        }

        /* --- Global / Layout --- */
        .about-section {
            padding: 50px 20px;
            font-family: 'Inter', sans-serif;
            background-color: white;
            min-height: 100vh;
        }

        /* --- Header --- */
        .header {
            text-align: center;
            margin-bottom: 60px;
        }

        .title-container {
            position: relative;
            display: inline-block;
            text-align: center;
        }

        .main-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 20px;
            
            /* Gradient Text Effect */
            background: linear-gradient(to right, var(--primary-purple), var(--secondary-teal));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: var(--primary-purple); /* Fallback */
        }

        .title-underline {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            border-radius: 4px;
            background: linear-gradient(to right, var(--secondary-teal), var(--primary-purple));
            bottom: -10px;
        }

        .subtitle {
            margin-top: 30px;
            font-size: 1.1rem;
            color: var(--text-light);
        }

        /* --- Steps Grid --- */
        .steps-grid {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            border-radius: 8px;
        }

        /* --- Step Card --- */
        .step-card {
            flex: 1;
            padding: 20px 40px;
            position: relative;
            display: flex;
        }
        
        /* Inner content container to manage text alignment */
        .step-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Default: Align content left */
        }

        .step-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .step-number {
            font-size: 3rem;
            font-weight: 800;
            color: var(--primary-purple);
            margin-right: 15px;
        }

        .icon-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--background-light);
            border: 1px solid var(--primary-purple);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }

        .icon {
            width: 24px;
            height: 24px;
            color: var(--primary-purple);
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary-purple);
            margin-bottom: 8px;
        }

        .card-description {
            font-size: 0.95rem;
            color: var(--text-light);
            line-height: 1.5;
        }

        /* --- Vertical Divider (between cards) --- */
        .divider-line {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 100px;
            width: 1px;
            background-color: var(--border-color);
        }

        /* --- Responsiveness (Mobile/Tablet) --- */
        @media (max-width: 768px) {
            .steps-grid {
                flex-direction: column;
                padding: 0 10px;
            }

            .step-card {
                padding: 20px 0;
            }

            .step-content {
                align-items: center; /* Center content on mobile */
                text-align: center;
            }

            .step-text {
                text-align: center;
            }

            .step-header {
                justify-content: center;
                width: 100%;
            }

            /* Hide vertical divider and use a horizontal one */
            .divider-line {
                display: block; /* Make it visible for mobile as a horizontal line */
                position: static;
                transform: none;
                width: 80%;
                height: 1px;
                margin: 30px auto 0; 
                border-bottom: 1px solid var(--border-color);
                background: none;
            }

            .step-card:last-child .divider-line {
                display: none; /* Hide the last divider */
            }
        }

        @media (min-width: 769px) {
             /* Remove horizontal divider on desktop */
             .step-card:not(:last-child) .divider-line {
                display: block;
            }
        }
      `}</style>

      <div className="header">
        <Title text="How SafeStep Works" />
        <p className="subtitle">Three simple steps between you and safety. It's that easy.</p>
      </div>

      <div className="steps-grid">
        {stepsData.map((step, index) => (
          <StepCard 
            key={step.number} 
            {...step} 
            isLast={index === stepsData.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default About;