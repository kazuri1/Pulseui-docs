"use client";

import { Card } from "pulseui-base";

export default function CardDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Card Component</h1>
      <p className="text-lg text-gray-600">
        A flexible card component for displaying content in organized, visually
        appealing containers.
      </p>

      <div className="space-y-6 mt-8">
        {/* Default Card */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Card</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Card>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Card Title</h4>
                <p className="text-gray-600">
                  This is a basic card with some content inside.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Different Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Card variant="default">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Default Variant
                  </h4>
                  <p className="text-gray-600">Standard card appearance.</p>
                </div>
              </Card>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Card variant="image-overlay">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Image Overlay Variant
                  </h4>
                  <p className="text-gray-600">
                    Card with image overlay background.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Card>
                <div className="p-4">
                  <h4 className="text-base font-semibold mb-2">Small Card</h4>
                  <p className="text-sm text-gray-600">Compact card design.</p>
                </div>
              </Card>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Medium Card</h4>
                  <p className="text-gray-600">Standard card size.</p>
                </div>
              </Card>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Card>
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-2">Large Card</h4>
                  <p className="text-lg text-gray-600">Spacious card layout.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Card with Header and Footer */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Card with Header and Footer
          </h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Card>
              <div className="border-b border-gray-200 p-6">
                <h4 className="text-lg font-semibold">Card Header</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This is the main content area of the card.
                </p>
              </div>
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex justify-end space-x-2">
                  <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Interactive Card */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Interactive Card</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Clickable Card</h4>
                <p className="text-gray-600">
                  This card has hover effects and can be clicked.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Card with Image */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Card with Image</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Card>
              <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg"></div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Card with Image</h4>
                <p className="text-gray-600">
                  Card featuring an image or visual element at the top.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
