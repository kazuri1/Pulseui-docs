"use client";

import { useState } from "react";
import CustomLeftDrawer from "../../components/CustomLeftDrawer";
import {
  Button,
  Card,
  Badge,
  Avatar,
  Alert,
  Input,
  Textarea,
  Switch,
  Radio,
  Pagination,
} from "pulseui-base";
import "pulseui-base/styles";

const componentSections = [
  {
    id: "guides",
    title: "Guides",
    items: [
      {
        id: "getting-started",
        label: "Getting Started",
        href: "/docs/guides/getting-started",
      },
      {
        id: "installation",
        label: "Installation",
        href: "/docs/guides/installation",
      },
      {
        id: "basic-usage",
        label: "Basic Usage",
        href: "/docs/guides/basic-usage",
      },
      {
        id: "advanced-patterns",
        label: "Advanced Patterns",
        href: "/docs/guides/advanced-patterns",
      },
    ],
  },
  {
    id: "design-principles",
    title: "Design Principles",
    items: [
      {
        id: "accessibility",
        label: "Accessibility",
        href: "/docs/design-principles/accessibility",
      },
      {
        id: "consistency",
        label: "Consistency",
        href: "/docs/design-principles/consistency",
      },
      {
        id: "usability",
        label: "Usability",
        href: "/docs/design-principles/usability",
      },
      {
        id: "performance",
        label: "Performance",
        href: "/docs/design-principles/performance",
      },
    ],
  },
  {
    id: "pulse-ui-hooks",
    title: "Pulse UI Hooks",
    items: [
      { id: "useTheme", label: "useTheme", href: "/docs/hooks/useTheme" },
      {
        id: "useBreakpoint",
        label: "useBreakpoint",
        href: "/docs/hooks/useBreakpoint",
      },
      {
        id: "useLocalStorage",
        label: "useLocalStorage",
        href: "/docs/hooks/useLocalStorage",
      },
      {
        id: "useMediaQuery",
        label: "useMediaQuery",
        href: "/docs/hooks/useMediaQuery",
      },
      {
        id: "useClickOutside",
        label: "useClickOutside",
        href: "/docs/hooks/useClickOutside",
      },
    ],
  },
  {
    id: "components",
    title: "Components",
    items: [
      { id: "alert", label: "Alert", href: "/docs/components/alert" },
      {
        id: "autocomplete",
        label: "Autocomplete",
        href: "/docs/components/autocomplete",
      },
      { id: "avatar", label: "Avatar", href: "/docs/components/avatar" },
      { id: "badge", label: "Badge", href: "/docs/components/badge" },
      { id: "button", label: "Button", href: "/docs/components/button" },
      { id: "card", label: "Card", href: "/docs/components/card" },
      { id: "drawer", label: "Drawer", href: "/docs/components/drawer" },
      { id: "image", label: "Image", href: "/docs/components/image" },
      { id: "input", label: "Input", href: "/docs/components/input" },
      {
        id: "left-drawer",
        label: "LeftDrawer",
        href: "/docs/components/left-drawer",
      },
      { id: "modal", label: "Modal", href: "/docs/components/modal" },
      {
        id: "modal-footer",
        label: "ModalFooter",
        href: "/docs/components/modal-footer",
      },
      {
        id: "pagination",
        label: "Pagination",
        href: "/docs/components/pagination",
      },
      {
        id: "password-input",
        label: "PasswordInput",
        href: "/docs/components/password-input",
      },
      {
        id: "pin-input",
        label: "PinInput",
        href: "/docs/components/pin-input",
      },
      {
        id: "pill-input",
        label: "PillInput",
        href: "/docs/components/pill-input",
      },
      { id: "radio", label: "Radio", href: "/docs/components/radio" },
      {
        id: "simple-top-nav",
        label: "SimpleTopNav",
        href: "/docs/components/simple-top-nav",
      },
      { id: "stepper", label: "Stepper", href: "/docs/components/stepper" },
      { id: "switch", label: "Switch", href: "/docs/components/switch" },
      { id: "text", label: "Text", href: "/docs/components/text" },
      { id: "textarea", label: "Textarea", href: "/docs/components/textarea" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="h-screen">
      {/* Main Content Area */}
      <div className="h-full">
        {/* CustomLeftDrawer with Pulse UI LeftDrawer */}
        <CustomLeftDrawer
          sections={componentSections}
          brandName="Pulse UI"
          brandTitle="Component Library"
          width="280px"
          isOpen={true}
        />
      </div>
    </div>
  );
}
