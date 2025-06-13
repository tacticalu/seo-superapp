import type { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthentication } from '#/context/auth/AuthProvider'

/**
 * A higher-order wrapper for the conditional route component
 * Can be used directly, or used as a building block for more
 * specific components like `withLoggedIn` or `withAdmin`
 */
export function withCondition(
  Component: FunctionComponent,
  condition: boolean,
  redirectTo: string
) {
  return function InnerComponent(props?: any) {
    return condition ? <Component {...props} /> : <Navigate to={redirectTo} replace />
  }
}

/** A higher-order wrapper, binding the "user logged in" condition and redirect */
export const withLoggedIn = (Component: FunctionComponent) => {
  const { loggedIn } = useAuthentication()
  return withCondition(Component, loggedIn, '/login?as=user')
}

/** The inverse, showing a page only if a user is logged OUT */
export const withLoggedOut = (Component: FunctionComponent) =>
  withCondition(Component, !useAuthentication().loggedIn, '/')
