"use client";

import { LeftDrawer, useBreakpoint } from "pulseui-base";
import "pulseui-base/styles";
import ComponentDisplay from "../../components/ComponentDisplay";
import { useState, useEffect } from "react";

const componentSections = [
  {
    id: "all-components",
    title: "All Components",
    items: [],
  },
];

export default function DocsPage() {
  const breakpoint = useBreakpoint();
  const [drawerWidth, setDrawerWidth] = useState("280px");
  const [isMobile, setIsMobile] = useState(false);

  // Determine drawer width based on screen size
  const getDrawerWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      return "160px"; // Very small drawer for mobile phones
    } else if (screenWidth <= 768) {
      return "180px"; // Small drawer for tablets
    } else if (screenWidth < 748) {
      return "200px"; // Shrunk drawer for smaller desktop screens
    } else {
      return "280px"; // Full width drawer for larger screens
    }
  };

  // Update drawer width and mobile state when window resizes
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
      setDrawerWidth(getDrawerWidth());
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []); // Remove breakpoint dependency to use pure window size

  return (
    <>
      <style jsx global>{`
        /* Remove header border from left drawer */
        [class*="leftDrawer"] [class*="drawer-header"],
        [class*="leftDrawer"] [class*="drawer-title"],
        [class*="leftDrawer"] [class*="drawer-close"],
        [class*="leftDrawer"] .drawer-header,
        [class*="leftDrawer"] .drawer-title,
        [class*="leftDrawer"] .drawer-close {
          border-bottom: none !important;
          border: none !important;
        }

        /* Remove any other borders that might appear */
        [class*="leftDrawer"] * {
          border-bottom: none !important;
        }

        /* Highlight selected item in left drawer */
        [class*="leftDrawer"] [class*="nav-item"][aria-selected="true"],
        [class*="leftDrawer"] [class*="drawer-item"][aria-selected="true"],
        [class*="leftDrawer"] [class*="nav-item"].selected,
        [class*="leftDrawer"] [class*="drawer-item"].selected,
        [class*="leftDrawer"] [class*="nav-item"].active,
        [class*="leftDrawer"] [class*="drawer-item"].active {
          color: #000000 !important;
          font-weight: 700 !important;
        }

        /* Alternative selectors for selected state */
        [class*="leftDrawer"] a[aria-current="page"],
        [class*="leftDrawer"] a[aria-current="true"],
        [class*="leftDrawer"] a.selected,
        [class*="leftDrawer"] a.active {
          color: #000000 !important;
          font-weight: 700 !important;
        }

        /* Mobile drawer constraints */
        @media (max-width: 480px) {
          [class*="leftDrawer"] {
            max-width: 160px !important;
            min-width: 160px !important;
          }
        }

        @media (max-width: 768px) {
          [class*="leftDrawer"] {
            max-width: 180px !important;
            min-width: 180px !important;
          }
        }
      `}</style>

      <div style={{ minHeight: "100vh", display: "flex" }}>
        {/* Left Sidebar */}
        <div
          style={{
            width: drawerWidth,
            flexShrink: 0,
            marginTop: "10rem",
            transition: "width 0.3s ease",
            display: isMobile ? "none" : "block",
          }}
        >
          <LeftDrawer
            isOpen={true}
            onClose={() => {}}
            width={drawerWidth}
            className="border-t-0"
            sections={componentSections}
          />
        </div>

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            padding: "2rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div style={{ marginTop: "1rem", marginBottom: "100px" }}>
            <div>
              <h1
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "1.5rem",
                }}
              >
                All Components
              </h1>
              <div>
                <ComponentDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
