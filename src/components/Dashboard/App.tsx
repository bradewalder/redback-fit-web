import React from 'react';
import './Dashboard.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
