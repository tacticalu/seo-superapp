import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from 'react-router-dom'

import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import UserDashboard from './pages/dashboard'    // imports src/pages/dashboard/index.tsx
import AdminDashboard from './pages/admin'      // imports src/pages/admin/index.tsx

// Mock fetch for logged-in user data
const getUserData = () => {
  return new Promise<string | null>((resolve) =>
    setTimeout(() => {
      resolve(window.localStorage.getItem('user'))
    }, 3000)
  )
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RootLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      {/* Public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication pages */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* App pages (requires login) */}
      <Route path="dashboard" element={<AppLayout />}>
        {/* index route → /dashboard */}
        <Route index element={<UserDashboard />} />
      </Route>
      <Route path="admin" element={<AppLayout />}>
        {/* index route → /admin */}
        <Route index element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)
