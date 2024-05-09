import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root.tsx'; 
import LoginWrapper from './components/LoginWrapper';
import Dashboard from './components/Dashboard/App.tsx';

const router = createBrowserRouter([
    {
        element: <Root/>,
        errorElement: <Root/>,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
            {
                path: 'about',
                element: <div>About</div>,
            },
            {
                path: 'login',
                element: <LoginWrapper />  // Use the Login component here
            },
            {
                path: 'dashboard',
                element: <Dashboard />  // Route to the Dashboard component
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
