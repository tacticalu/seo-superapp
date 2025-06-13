import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full flex-col">
      <header className="mb-auto w-full" aria-hidden />
      <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
        <h1 className="block font-bold text-7xl text-gray-800 sm:text-8xl dark:text-white">404</h1>
        <div className="mt-6 text-gray-600 text-lg sm:mt-8 dark:text-gray-400">
          <p className="leading-8">Oops, something went wrong.</p>
          <p className="leading-8">Sorry, we couldn&rsquo;t find your page.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-3 py-2 font-semibold text-blue-500 text-sm ring-offset-white transition-all hover:text-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto dark:ring-offset-slate-900"
          >
            <svg className="h-2.5 w-2.5" width={20} height={20} viewBox="0 0 16 16" fill="none">
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            Back to main page
          </Link>
        </div>
      </div>
      <footer className="mt-auto py-5 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">© All Rights Reserved. {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
