"use client";

import { useState } from "react";
import { LeftDrawer, Grid } from "pulseui-base";
import "pulseui-base/styles";
import dynamic from "next/dynamic";

const AlertDocs = dynamic(() => import("./documentation/AlertDocs"), {
  ssr: false,
});
const AutocompleteDocs = dynamic(
  () => import("./documentation/AutocompleteDocs"),
  { ssr: false }
);
const ButtonDocs = dynamic(() => import("./documentation/ButtonDocs"), {
  ssr: false,
});
const BadgeDocs = dynamic(() => import("./documentation/BadgeDocs"), {
  ssr: false,
});
const CardDocs = dynamic(() => import("./documentation/CardDocs"), {
  ssr: false,
});
const AvatarDocs = dynamic(() => import("./documentation/AvatarDocs"), {
  ssr: false,
});
const TextDocs = dynamic(() => import("./documentation/TextDocs"), {
  ssr: false,
});
const InputDocs = dynamic(() => import("./documentation/InputDocs"), {
  ssr: false,
});

interface DrawerItem {
  id: string;
  label: string;
  onClick?: () => void;
}

interface DrawerSection {
  id: string;
  title: string;
  items?: DrawerItem[];
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
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  // Handle component selection from drawer items
  const handleComponentSelect = (componentId: string) => {
    if (componentId === "alert") {
      setSelectedComponent("alert");
    } else if (componentId === "autocomplete") {
      setSelectedComponent("autocomplete");
    } else if (componentId === "button") {
      setSelectedComponent("button");
    } else if (componentId === "badge") {
      setSelectedComponent("badge");
    } else if (componentId === "card") {
      setSelectedComponent("card");
    } else if (componentId === "avatar") {
      setSelectedComponent("avatar");
    } else if (componentId === "text") {
      setSelectedComponent("text");
    } else if (componentId === "input") {
      setSelectedComponent("input");
    } else {
      setSelectedComponent(null);
    }
  };

  // Enhanced sections with click handlers
  const enhancedSections = sections.map((section) => ({
    ...section,
    items: (section.items || []).map((item: DrawerItem) => ({
      ...item,
      onClick: () => handleComponentSelect(item.id),
    })),
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
                    className="mb-8 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    ← Back to Docs
                  </button>

                  {selectedComponent === "alert" && <AlertDocs />}

                  {selectedComponent === "autocomplete" && <AutocompleteDocs />}

                  {selectedComponent === "button" && <ButtonDocs />}

                  {selectedComponent === "badge" && <BadgeDocs />}

                  {selectedComponent === "card" && <CardDocs />}

                  {selectedComponent === "avatar" && <AvatarDocs />}

                  {selectedComponent === "text" && <TextDocs />}

                  {selectedComponent === "input" && <InputDocs />}
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
