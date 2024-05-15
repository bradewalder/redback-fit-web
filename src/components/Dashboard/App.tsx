import './Dashboard.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import DataPredictions from './Data&Predictions';

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />  
          <Route path="/data-predictions" element={<DataPredictions />} />  //GET THIS TO RENDER 
        </Routes>
      </div>
    </div>
  );
};

export default App;
