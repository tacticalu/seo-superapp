import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom'
import { AppLayout, PublicLayout, RootLayout } from './layouts'
import { AuthLayout } from './layouts/auth-layout'
import { Login } from './pages/auth'
import Home from './pages/home'
import UserDashboard from './pages/dashboard'      // ← default import
import AdminDashboard from './pages/admin'         // ← default import

// simulate fetching the logged‑in user
const getUserData = () =>
  new Promise<string | null>(resolve =>
    setTimeout(() => resolve(window.localStorage.getItem('user')), 3000)
  )

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} loader={() => defer({ userPromise: getUserData() })}>
      {/* public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      {/* protected app area */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)
