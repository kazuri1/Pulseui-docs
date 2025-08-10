"use client";

import Link from "next/link";

export default function HooksPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Documentation
          </h2>

          {/* Navigation Items */}
          <nav className="space-y-1">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>

            <Link
              href="/docs/components"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Components
            </Link>

            <Link
              href="/docs/hooks"
              className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-md font-medium"
            >
              <svg
                className="w-5 h-5 mr-3 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-.758l1.102-1.101a4 4 0 105.656-5.656l4-4a4 4 0 00-5.656 0l-1.102 1.101m-.758-.758l1.102-1.101a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                />
              </svg>
              Hooks
            </Link>

            <Link
              href="/docs/guides"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Guides
            </Link>
          </nav>

          {/* Separator */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Hooks Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              HOOKS
            </h3>

            <Link
              href="/docs/hooks/use-breakpoint-value"
              className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-md font-medium"
            >
              <span className="ml-6">useBreakPointValue</span>
            </Link>

            <Link
              href="/docs/hooks/use-media-query"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">useMediaQuery</span>
            </Link>
          </div>

          {/* Apps Section */}
          <div className="space-y-3 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              APPS
            </h3>

            <Link
              href="/docs/apps/dashboard"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Dashboard App</span>
            </Link>

            <Link
              href="/docs/apps/kitchensink"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Kitchensink App</span>
            </Link>

            <Link
              href="/docs/apps/todo"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Todo App</span>
            </Link>

            <Link
              href="/docs/apps/starter-kit"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Starter Kit</span>
            </Link>

            <Link
              href="/docs/apps/storybook"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Storybook App</span>
            </Link>
          </div>

          {/* Guides Section */}
          <div className="space-y-3 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              GUIDES
            </h3>
          </div>

          {/* Recipes Section */}
          <div className="space-y-3 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              RECIPES
            </h3>

            <Link
              href="/docs/recipes/linear-gradient"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">LinearGradient</span>
            </Link>
          </div>

          {/* Tutorials Section */}
          <div className="space-y-3 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              TUTORIALS
            </h3>

            <Link
              href="/docs/tutorials/ecommerce-app"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="ml-6">Building Ecommerce App</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Docs
            </Link>
            <Link href="/docs/hooks" className="text-blue-600 font-medium">
              Hooks
            </Link>
            <Link
              href="/docs/guides"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/docs/design-principles"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Design Principles
            </Link>
            <Link
              href="/docs/components"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Components
            </Link>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Hooks</h1>
          <p className="text-lg text-gray-600 mb-8">
            Essential React hooks for building powerful applications with Pulse
            UI.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                useBreakPointValue
              </h2>
              <p className="text-gray-600 mb-4">
                A responsive hook that returns different values based on the
                current breakpoint.
              </p>
              <Link
                href="/docs/hooks/use-breakpoint-value"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Hook →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                useMediaQuery
              </h2>
              <p className="text-gray-600 mb-4">
                A hook for handling media queries and responsive behavior in
                React components.
              </p>
              <Link
                href="/docs/hooks/use-media-query"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Hook →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
