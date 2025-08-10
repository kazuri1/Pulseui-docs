"use client";

import { Avatar } from "pulseui-base";

export default function AvatarDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Avatar Component
      </h1>
      <p className="text-lg text-gray-600">
        A versatile avatar component for displaying user profile pictures,
        initials, or icons with various sizes and styles.
      </p>

      <div className="space-y-6 mt-8">
        {/* Default Avatar */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Avatar</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <Avatar />
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
              <Avatar size="xs" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar size="sm" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar size="md" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar size="lg" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar size="xl" />
            </div>
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
              <Avatar variant="primary" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="secondary" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="success" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="muted" />
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
              <Avatar variant="primary" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="success" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="warning" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="error" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="secondary" />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar variant="muted" />
            </div>
          </div>
        </div>

        {/* With Image */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Image</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="User avatar"
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="User avatar"
              />
            </div>
          </div>
        </div>

        {/* Avatar Group */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Avatar Group</h3>
          <div
            className="mb-12 !mb-12"
            style={{ marginBottom: "48px !important" }}
          >
            <div className="flex -space-x-2">
              <Avatar size="sm" variant="primary" />
              <Avatar size="sm" variant="success" />
              <Avatar size="sm" variant="secondary" />
              <Avatar size="sm" variant="warning" />
            </div>
          </div>
        </div>

        {/* With Status */}
        <div>
          <h3 className="text-lg font-semibold mb-3">With Status</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <div className="relative">
                <Avatar variant="success" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <div className="relative">
                <Avatar variant="warning" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <div className="relative">
                <Avatar variant="error" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Shapes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Shapes</h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
