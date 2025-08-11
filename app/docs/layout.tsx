import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Component library documentation",
};

// Force dynamic rendering to prevent SSR issues with pulseui-base
export const dynamic = "force-dynamic";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

