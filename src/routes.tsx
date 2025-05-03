import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'

import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import UserDashboard from './pages/dashboard'
import AdminDashboard from './pages/admin'

// Fake “getUserData” loader
const getUserData = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(window.localStorage.getItem('user'))
    }, 3000)
  )

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} loader={() => defer({ userPromise: getUserData() })}>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<UserDashboard />} />
      </Route>

      <Route path="/admin" element={<AppLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)
