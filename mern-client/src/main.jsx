import React, { StrictMode } from 'react'; // Import React as well
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/router';
import AuthProvider from './Context/AuthProvider';

const root = createRoot(document.getElementById('root')); // Store the root instance

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);