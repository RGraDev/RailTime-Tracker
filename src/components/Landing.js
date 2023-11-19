// Landing.js
import React from 'react';
import '../styles/Landing.css'; 

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <img src="/path/to/your/image.jpg" alt="RailTime App" className="landing-image" />
        <div className="landing-text">
          <h2>Welcome to RailTime Tracker</h2>
          <p>Your go-to app for tracking train schedules and arrivals.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
