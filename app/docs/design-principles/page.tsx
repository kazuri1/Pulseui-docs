"use client";

import Link from "next/link";

export default function DesignPrinciplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
            Docs
          </Link>
          <Link href="/docs/hooks" className="text-gray-600 hover:text-gray-900 transition-colors">
            Hooks
          </Link>
          <Link href="/docs/guides" className="text-gray-600 hover:text-gray-900 transition-colors">
            Guides
          </Link>
          <Link href="/docs/design-principles" className="text-blue-600 font-medium">
            Design Principles
          </Link>
          <Link href="/docs/components" className="text-gray-600 hover:text-gray-900 transition-colors">
            Components
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Design Principles
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The foundational principles that guide the design and development of Pulse UI components.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Accessibility First</h2>
            <p className="text-gray-600 mb-4">
              Every component is built with accessibility in mind, following WCAG guidelines and ensuring 
              keyboard navigation, screen reader support, and proper semantic markup.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-blue-800 text-sm">
                <strong>Principle:</strong> If it&apos;s not accessible, it&apos;s not complete.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Consistency</h2>
            <p className="text-gray-600 mb-4">
              Components follow consistent patterns for spacing, typography, colors, and interactions. 
              This creates predictable and intuitive user experiences.
            </p>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-green-800 text-sm">
                <strong>Principle:</strong> Familiar patterns reduce cognitive load.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Flexibility</h2>
            <p className="text-gray-600 mb-4">
              Components are designed to be flexible and adaptable, allowing developers to customize 
              appearance and behavior while maintaining core functionality.
            </p>
            <div className="bg-purple-50 p-4 rounded-md">
              <p className="text-purple-800 text-sm">
                <strong>Principle:</strong> Adaptable components serve more use cases.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance</h2>
            <p className="text-gray-600 mb-4">
              Components are optimized for performance, with minimal bundle size, efficient rendering, 
              and smooth animations that enhance rather than hinder user experience.
            </p>
            <div className="bg-orange-50 p-4 rounded-md">
              <p className="text-orange-800 text-sm">
                <strong>Principle:</strong> Fast is better than slow.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Mobile First</h2>
            <p className="text-gray-600 mb-4">
              Design starts with mobile devices and scales up, ensuring optimal experiences across 
              all screen sizes and device capabilities.
            </p>
            <div className="bg-indigo-50 p-4 rounded-md">
              <p className="text-indigo-800 text-sm">
                <strong>Principle:</strong> Mobile constraints drive better design decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
