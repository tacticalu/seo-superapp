import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'

import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import UserDashboard from './pages/dashboard'
import AdminDashboard from './pages/admin'

// stubbed user fetch (you can replace this with a real API call)
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
    }, 3000)
  )

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

      {/* Auth (login) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* User dashboard */}
      <Route path="/dashboard" element={<AppLayout />}>
        {/* the “index” child makes `/dashboard` itself render UserDashboard */}
        <Route index element={<UserDashboard />} />
      </Route>

      {/* Admin dashboard */}
      <Route path="/admin" element={<AppLayout />}>
        {/* the “index” child makes `/admin` itself render AdminDashboard */}
        <Route index element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)
