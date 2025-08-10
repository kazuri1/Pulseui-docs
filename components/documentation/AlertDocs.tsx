"use client";

import { Alert } from "pulseui-base";

export default function AlertDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Alert Component</h1>
      <p className="text-lg text-gray-600">
        A flexible alert component for displaying important information to users
        with various visual variants and styles.
      </p>
      <div className="space-y-6 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Alert</h3>
          <Alert variant="info">
            This is a default info alert with some text content.
          </Alert>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info">
                This is an info alert with some text content.
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="success">
                This is a success alert with some text content.
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="warning">
                This is a warning alert with some text content.
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="error">
                This is an error alert with some text content.
              </Alert>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" size="xs">
                Extra small alert
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" size="sm">
                Small alert
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" size="md">
                Medium alert (default)
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" size="lg">
                Large alert
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" size="xl">
                Extra large alert
              </Alert>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Style Variants</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="default">
                Default style
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="filled">
                Filled style
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="light">
                Light style
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="outline">
                Outline style
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="transparent">
                Transparent style
              </Alert>
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Alert variant="info" styleVariant="white">
                White style
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
