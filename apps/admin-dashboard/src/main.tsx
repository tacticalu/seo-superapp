import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AdminDashboard } from '@/pages/admin';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminDashboard />
  </React.StrictMode>
);
