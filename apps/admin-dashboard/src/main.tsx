// apps/admin-dashboard/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function AdminDashboardApp() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4 text-lg text-gray-700">Welcome to the admin panel.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminDashboardApp />
  </React.StrictMode>
)
