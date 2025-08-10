"use client";

import Link from "next/link";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          <Link
            href="/docs/hooks"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Hooks
          </Link>
          <Link href="/docs/guides" className="text-blue-600 font-medium">
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
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Pulse UI Guides
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step guides to help you get started with Pulse UI and build
          amazing applications.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Getting Started
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to install and set up Pulse UI in your project.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <code className="text-sm text-gray-800">
                npm install pulseui-base
              </code>
            </div>
            <a
              href="/docs/guides/getting-started"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read Guide →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Theme Customization
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to customize colors, typography, and spacing to match
              your brand.
            </p>
            <a
              href="/docs/guides/theme-customization"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read Guide →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Responsive Design
            </h2>
            <p className="text-gray-600 mb-4">
              Master responsive design patterns using Pulse UI&apos;s built-in
              utilities and components.
            </p>
            <a
              href="/docs/guides/responsive-design"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read Guide →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Accessibility
            </h2>
            <p className="text-gray-600 mb-4">
              Build accessible applications with Pulse UI&apos;s
              accessibility-first approach.
            </p>
            <a
              href="/docs/guides/accessibility"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read Guide →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
