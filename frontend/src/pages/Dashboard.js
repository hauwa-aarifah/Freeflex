import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <Link to="/key-metrics">Key Metrics</Link>
        <Link to="/skill-map">Skill Map</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
