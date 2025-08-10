"use client";

import { Input } from "pulseui-base";

export default function InputDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Input Component</h1>
      <p className="text-lg text-gray-600">
        A versatile input component for collecting user data with various sizes,
        variants, and states.
      </p>

      <div className="space-y-6 mt-8">
        {/* Default Input */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Input</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Input placeholder="Enter your text here..." />
          </div>
        </div>

        {/* Different Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input variant="default" placeholder="Default variant" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input variant="filled" placeholder="Filled variant" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input variant="unstyled" placeholder="Unstyled variant" />
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div className="space-y-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input size="sm" placeholder="Small Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input size="md" placeholder="Medium Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input size="lg" placeholder="Large Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input size="xl" placeholder="Extra Large Input" />
            </div>
          </div>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Primary Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Secondary Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Success Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Warning Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Error Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Muted Input" />
            </div>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Icons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input leftIcon="🔍" placeholder="Search with left icon" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input rightIcon="✓" placeholder="Input with right icon" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input
                leftIcon="📧"
                rightIcon="→"
                placeholder="Email with both icons"
              />
            </div>
          </div>
        </div>

        {/* Different States */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different States</h3>
          <div className="space-y-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Normal Input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Disabled Input" disabled />
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Labels</h3>
          <div className="space-y-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input placeholder="Enter your email" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input placeholder="Enter your full name" />
            </div>
          </div>
        </div>

        {/* With Descriptions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Descriptions</h3>
          <div className="space-y-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <Input placeholder="Choose a username" />
              <p className="mt-1 text-sm text-gray-500">
                This will be your public display name.
              </p>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input placeholder="Enter phone number" />
              <p className="mt-1 text-sm text-gray-500">
                We&apos;ll use this to send you important updates.
              </p>
            </div>
          </div>
        </div>

        {/* Different Input Types */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Input Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="email" placeholder="Email input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="password" placeholder="Password input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="number" placeholder="Number input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="tel" placeholder="Telephone input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="url" placeholder="URL input" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input type="search" placeholder="Search input" />
            </div>
          </div>
        </div>

        {/* With Error Messages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Error Messages</h3>
          <div className="space-y-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Invalid input" />
              <p className="mt-1 text-sm text-red-600">
                This field is required.
              </p>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Input placeholder="Invalid email" />
              <p className="mt-1 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
