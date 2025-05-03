import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '#/context/auth/AuthProvider'

/**
 * AuthLayout guards any “/dashboard” or “/admin” routes.
 *
 * Right now we’re _disabling_ the redirect to /login
 * so you can work on the dashboard pages without needing real auth.
 */
export function AuthLayout() {
  // const { loggedIn } = useAuthentication()
  // if (!loggedIn) {
  //   return <Navigate to="/login" replace />
  // }
  return <Outlet />
}
