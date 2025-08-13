"use client";

import { SimpleTopNav, useBreakpoint } from "pulseui-base";
import { Palette, GitHub, LibraryBooks } from "@mui/icons-material";
import "pulseui-base/styles";

export default function Navigation() {
  const breakpoint = useBreakpoint();

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "docs", label: "Docs", href: "/docs" },
    // Social media items
    {
      id: "figma",
      label: "Figma",
      href: "https://figma.com",
      icon: Palette,
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com",
      icon: GitHub,
    },
    {
      id: "npm",
      label: "NPM",
      href: "https://npmjs.com",
      icon: LibraryBooks,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <SimpleTopNav
        brandName="Pulse UI Base"
        brandTitle={breakpoint.isMobile ? "" : "Documentation & Examples"}
        items={navItems}
        showBrand={true}
        showNavigation={true}
        defaultMobileMenuOpen={false}
        className="bg-black text-white w-full"
        style={{
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0,
          width: "100%",
          maxWidth: "100vw",
        }}
      />
    </div>
  );
}
