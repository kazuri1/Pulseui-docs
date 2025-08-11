"use client";

import { SimpleTopNav } from "pulseui-base";
import { Palette, GitHub, LibraryBooks } from "@mui/icons-material";
import "pulseui-base/styles";

export default function Navigation() {
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
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-[9999] w-full">
      <SimpleTopNav
        brandName="Pulse UI Base"
        brandTitle="Documentation & Examples"
        items={navItems}
        showBrand={true}
        showNavigation={true}
        defaultMobileMenuOpen={false}
        className="bg-black text-white w-full"
      />
    </div>
  );
}
