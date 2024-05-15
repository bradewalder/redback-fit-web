import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root.tsx'; 
import LoginWrapper from './components/LoginWrapper';
import App from './components/Dashboard/App';

const router = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <Root />,
        children: [
            
            { path: 'login', element: <LoginWrapper /> },
            { path: 'dashboard/*', element: <App /> }, // Use App and manage sub-routes inside it
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
