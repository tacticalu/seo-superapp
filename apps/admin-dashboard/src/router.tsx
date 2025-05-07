import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboardPage from './pages'
import AnalyticsPage from './pages/analytics'
import SettingsPage from './pages/settings'
import UsersPage from './pages/users'

export default function AdminRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}
