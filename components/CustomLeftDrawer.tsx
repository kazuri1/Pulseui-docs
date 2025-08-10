"use client";

import { useState } from "react";
import { LeftDrawer, Alert, Grid, ComponentDisplay } from "pulseui-base";
import "pulseui-base/styles";

interface CustomLeftDrawerProps {
  brandName?: string;
  brandTitle?: string;
  brandLogo?: any;
  width?: string;
  className?: string;
  isOpen?: boolean;
  sections?: any[];
}

export default function CustomLeftDrawer({
  brandName,
  brandTitle,
  brandLogo,
  width = "280px",
  className,
  isOpen = true,
  sections = [],
}: CustomLeftDrawerProps) {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  // Handle component selection from drawer items
  const handleComponentSelect = (componentId: string) => {
    if (componentId === "alert") {
      setSelectedComponent("alert");
    } else {
      setSelectedComponent(null);
    }
  };

  // Enhanced sections with click handlers
  const enhancedSections = sections.map((section) => ({
    ...section,
    items: section.items?.map((item: any) => ({
      ...item,
      onClick: () => handleComponentSelect(item.id),
    })),
  }));

  return (
    <div className="h-full flex flex-col">
      {/* Top Navigation - Takes remaining top height */}
      <div className="flex-shrink-0 h-16 bg-white border-b border-gray-200">
        {/* Top navigation content can go here */}
      </div>

      {/* Main Content Area - Fills remaining height */}
      <div className="flex-1">
        <Grid className="h-full">
          {/* Left Drawer */}
          <Grid.Col span={3}>
            <LeftDrawer
              isOpen={isOpen}
              onClose={() => {}} // Disable close functionality
              width={width}
              className={`${className || ""} !border-t-0`}
              sections={enhancedSections}
            />
          </Grid.Col>

          {/* Component Display Area - Right Side */}
          <Grid.Col span={9}>
            <div className="pt-8 pb-8 px-8">
              {selectedComponent ? (
                <>
                  <button
                    onClick={() => setSelectedComponent(null)}
                    className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    ← Back to Docs
                  </button>

                  {selectedComponent === "alert" && (
                    <ComponentDisplay
                      title="Alert Component"
                      description="A flexible alert component for displaying important information to users with various visual variants and styles."
                      componentName="Alert"
                      packageName="pulseui-base"
                      sourceUrl="https://github.com/pulseui/pulseui-base"
                      docsUrl="/docs/components/alert"
                    >
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Default Alert
                          </h3>
                          <Alert variant="info" title="Information">
                            This is a default info alert with a title.
                          </Alert>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Success Alert
                          </h3>
                          <Alert variant="success" title="Success">
                            Operation completed successfully!
                          </Alert>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Warning Alert
                          </h3>
                          <Alert variant="warning" title="Warning">
                            Please review your input before proceeding.
                          </Alert>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Error Alert
                          </h3>
                          <Alert variant="error" title="Error">
                            Something went wrong. Please try again.
                          </Alert>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Closeable Alert
                          </h3>
                          <Alert
                            variant="info"
                            title="Closeable Alert"
                            closeable={true}
                            onClose={() => console.log("Alert closed")}
                          >
                            This alert can be closed by the user.
                          </Alert>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Different Sizes
                          </h3>
                          <div className="space-y-2">
                            <Alert variant="info" size="xs">
                              Extra small alert
                            </Alert>
                            <Alert variant="info" size="sm">
                              Small alert
                            </Alert>
                            <Alert variant="info" size="md">
                              Medium alert (default)
                            </Alert>
                            <Alert variant="info" size="lg">
                              Large alert
                            </Alert>
                            <Alert variant="info" size="xl">
                              Extra large alert
                            </Alert>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Style Variants
                          </h3>
                          <div className="space-y-2">
                            <Alert variant="info" styleVariant="default">
                              Default style
                            </Alert>
                            <Alert variant="info" styleVariant="filled">
                              Filled style
                            </Alert>
                            <Alert variant="info" styleVariant="light">
                              Light style
                            </Alert>
                            <Alert variant="info" styleVariant="outline">
                              Outline style
                            </Alert>
                            <Alert variant="info" styleVariant="transparent">
                              Transparent style
                            </Alert>
                            <Alert variant="info" styleVariant="white">
                              White style
                            </Alert>
                          </div>
                        </div>
                      </div>
                    </ComponentDisplay>
                  )}
                </>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Component Library
                  </h1>
                  <p className="text-lg text-gray-600">
                    Select a component from the left drawer to view its
                    documentation and examples.
                  </p>
                </div>
              )}
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <style jsx>{`
        /* Remove any default margins/padding that might create space above top nav */
        :global(body),
        :global(html) {
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Ensure the component takes full height without extra spacing */
        :global(.h-full) {
          height: 100% !important;
        }

        :global(.left-drawer .drawer-header) {
          border-bottom: none !important;
        }
        :global([class*="leftDrawer"] [class*="drawer-header"]) {
          border-bottom: none !important;
        }
        :global([class*="leftDrawer"] [class*="drawer-header"]),
        :global([class*="leftDrawer"] [class*="drawer-title"]),
        :global([class*="leftDrawer"] [class*="drawer-close"]) {
          border-bottom: none !important;
        }
        :global([class*="leftDrawer"] *) {
          border-bottom: none !important;
        }
        :global([class*="leftDrawer"] [class*="nav-item"]),
        :global([class*="leftDrawer"] [class*="drawer-item"]),
        :global([class*="leftDrawer"] a),
        :global([class*="leftDrawer"] button) {
          font-size: 0.875rem !important;
        }
        :global([class*="leftDrawer"] [class*="section-title"]),
        :global([class*="leftDrawer"] [class*="drawer-section"]),
        :global([class*="leftDrawer"] h3),
        :global([class*="leftDrawer"] h4),
        :global([class*="leftDrawer"] [class*="title"]) {
          font-weight: 900 !important;
        }
        :global([class*="leftDrawer"] ::-webkit-scrollbar) {
          width: 6px !important;
        }
        :global([class*="leftDrawer"] ::-webkit-scrollbar-track) {
          background: transparent !important;
        }
        :global([class*="leftDrawer"] ::-webkit-scrollbar-thumb) {
          background: #d1d5db !important;
          border-radius: 3px !important;
        }
        :global([class*="leftDrawer"] ::-webkit-scrollbar-thumb:hover) {
          background: #9ca3af !important;
        }
      `}</style>
    </div>
  );
}
