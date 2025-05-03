// src/routes.tsx
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'
import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import { UserDashboard } from './pages/dashboard'
import { AdminDashboard } from './pages/admin'

// simulate fetching logged-in user data
const getUserData = () => {
  return new Promise<string | null>((resolve) =>
    setTimeout(() => resolve(window.localStorage.getItem('user')), 3000)
  )
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RootLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      {/* public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* protected dashboards */}
      <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<UserDashboard />} />
        </Route>
        <Route path="/admin" element={<AppLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Route>
    </Route>
  )
)
