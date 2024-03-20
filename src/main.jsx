import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/error404.jsx';
import NotePage from './pages/note.jsx';
import store from './redux/store.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { Provider } from 'react-redux';

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
        <Provider store={store}>
            <DarkModeContextProvider>
                <RouterProvider router={router} />
            </DarkModeContextProvider>
        </Provider>
    </React.StrictMode>,
);
