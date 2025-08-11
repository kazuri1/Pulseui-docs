"use client";

import { LeftDrawer, Grid } from "pulseui-base";
import "pulseui-base/styles";
import ComponentDisplay from "./ComponentDisplay";

interface DrawerSection {
  id: string;
  title: string;
  items?: any[];
}

interface CustomLeftDrawerProps {
  width?: string;
  className?: string;
  isOpen?: boolean;
  sections?: DrawerSection[];
}

export default function CustomLeftDrawer({
  width = "280px",
  className,
  isOpen = true,
  sections = [],
}: CustomLeftDrawerProps) {
  // Enhanced sections
  const enhancedSections = sections.map((section) => ({
    ...section,
    items: section.items || [],
  }));

  return (
    <div
      className="h-full flex flex-col pr-6"
      style={{ paddingRight: "100px" }}
    >
      {/* Main Content Area - Fills remaining height */}
      <div className="flex-1" style={{ justifyContent: "space-around" }}>
        <Grid className="h-full">
          {/* Left Drawer */}
          <Grid.Col span={3}>
            <LeftDrawer
              isOpen={isOpen}
              onClose={() => {}} // Disable close functionality
              width={width}
              className={`${className || ""} border-t-0`}
              sections={enhancedSections}
            />
          </Grid.Col>

          {/* Component Display Area - Right Side */}
          <Grid.Col span={9}>
            <div style={{ marginTop: "100px", marginBottom: "100px" }}>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  All Components
                </h1>

                <ComponentDisplay />
              </div>
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
