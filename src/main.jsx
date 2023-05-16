import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
