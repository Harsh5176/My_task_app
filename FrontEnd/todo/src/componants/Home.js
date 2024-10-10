import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="welcome-section">
        <div className="content">
          <h1>Welcome, User!</h1>
          <p>We’re thrilled to have you here. Let’s make your day more productive!</p>
          <Link to="/addtask" className="start-btn">Get Started</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;

