"use client";

import { Button } from "pulseui-base";

export default function ButtonDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Button Component
      </h1>
      <p className="text-lg text-gray-600">
        A versatile button component with multiple variants, sizes, and states
        for various user interactions.
      </p>
      <div className="space-y-6 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Button</h3>
          <Button>Default Button</Button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button variant="filled">Filled</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button variant="light">Light</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button variant="outline">Outline</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button variant="white">White</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button size="xs">Extra Small</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button size="sm">Small</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button size="md">Medium</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button size="lg">Large</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button size="xl">Extra Large</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different States</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button>Normal</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button disabled>Disabled</Button>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Button disabled>Loading...</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
