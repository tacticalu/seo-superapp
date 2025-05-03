
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'

import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import UserDashboard from './pages/dashboard'
import AdminDashboard from './pages/admin'

// Ideally this would be an API call to server to get logged in user data
const getUserData = () => {
  return new Promise((resolve, _reject) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
      // reject('Error')
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
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected app pages */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin"     element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)
