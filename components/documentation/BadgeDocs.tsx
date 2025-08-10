"use client";

import { Badge } from "pulseui-base";

export default function BadgeDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Badge Component</h1>
      <p className="text-lg text-gray-600">
        A versatile badge component for displaying status, counts, and labels
        with various styles and colors.
      </p>

      <div className="space-y-6 mt-8">
        {/* Default Badge */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Badge</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Badge>Default</Badge>
          </div>
        </div>

        {/* Different Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="filled">Filled</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="light">Light</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="outline">Outline</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="dot">Dot</Badge>
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge size="xs">Extra Small</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge size="sm">Small</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge size="md">Medium</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge size="lg">Large</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge size="xl">Extra Large</Badge>
            </div>
          </div>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Colors</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="filled">Blue</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="light">Green</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="outline">Red</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="white">Yellow</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="subtle">Purple</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge variant="dot">Gray</Badge>
            </div>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge leftIcon="✓">Success</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge rightIcon="→">Next</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge leftIcon="!" variant="filled">
                Warning
              </Badge>
            </div>
          </div>
        </div>

        {/* Different States */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different States</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge>Normal</Badge>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Badge disabled>Disabled</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
