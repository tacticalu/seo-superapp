// src/layouts/AuthLayout.tsx

import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  // TEMPORARY: Bypass auth redirect
  return (
    <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
      <Outlet />
    </div>
  )
}
