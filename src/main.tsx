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
                element: <LoginWrapper />  
            },
            {
                path: 'dashboard',
                element: <Dashboard />  
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
