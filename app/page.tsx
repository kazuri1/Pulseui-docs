export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-8 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Pulse UI Base
          </h1>
          <p className="text-xl text-gray-600">
            Your documentation hub built with Next.js, React 19, and Tailwind
            CSS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Getting Started
            </h2>
            <p className="text-gray-600 mb-4">
              This is a modern documentation website built with the latest web
              technologies.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Next.js 15 with App Router</li>
              <li>• React 19 with modern features</li>
              <li>• Tailwind CSS 4 for styling</li>
              <li>• TypeScript for type safety</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📚 Documentation
            </h2>
            <p className="text-gray-600 mb-4">
              Start building your documentation by adding new pages and
              components.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                • Create new pages in the{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">app</code>{" "}
                directory
              </p>
              <p>
                • Add components in a{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  components
                </code>{" "}
                folder
              </p>
              <p>• Use Tailwind CSS for styling</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
