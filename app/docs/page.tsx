"use client";

import CustomLeftDrawer from "../../components/CustomLeftDrawer";

const componentSections = [
  {
    id: "components",
    title: "Components",
    items: [
      {
        id: "alert",
        label: "Alert",
      },
      {
        id: "autocomplete",
        label: "Autocomplete",
      },
      {
        id: "button",
        label: "Button",
      },
      {
        id: "badge",
        label: "Badge",
      },
      {
        id: "card",
        label: "Card",
      },
      {
        id: "avatar",
        label: "Avatar",
      },
      {
        id: "text",
        label: "Text",
      },
      {
        id: "input",
        label: "Input",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="flex-shrink-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
        <div className="text-gray-500 text-sm font-medium">EXAMPLES</div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-900 font-medium">DOCS</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">🎨</span>
            <span className="text-gray-900 font-medium">FIGMA</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <CustomLeftDrawer
          sections={componentSections}
          width="280px"
          isOpen={true}
        />
      </div>
    </div>
  );
}
