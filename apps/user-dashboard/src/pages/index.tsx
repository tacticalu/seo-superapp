import { useEffect } from 'react'
import { generateMetaTags } from '../utils/seo'

export default function DashboardHome() {
  useEffect(() => {
    generateMetaTags({
      title: 'User Dashboard – SEO SuperApp',
      description: 'Manage your SEO projects and insights from one place.',
    })
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Your SEO SuperApp Dashboard</h1>
      <p className="mt-2 text-gray-600">This is where your project summaries will appear.</p>
    </main>
  )
}
