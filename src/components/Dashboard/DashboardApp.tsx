import './Dashboard.module.css';
import Header from './DashboardHeader';
import Sidebar from './DashboardSidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './DashboardLanding';
import DataPredictions from './DashboardDataPredictions';

const DashboardApp = () => {
	return (
		<div className="dashboard-container">
			<Sidebar />
			<div className="dashboard-content">
				<Header />
				<Routes>
					<Route path="/" element={<Dashboard />} />  
					<Route path="/data-predictions" element={<DataPredictions />} />  
				</Routes>
			</div>
		</div>
	);
};

export default DashboardApp;
