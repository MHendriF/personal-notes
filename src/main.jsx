import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/error404.jsx';
import NotePage from './pages/note.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <NotePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/note',
        element: <NotePage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <RouterProvider router={router} />
        </DarkModeContextProvider>
    </React.StrictMode>,
);
