"use client";

import {
  Button,
  Text,
  ProfileCard,
  Grid,
  GridCol,
  LoginForm,
  ContentCard,
} from "pulseui-base";
import "pulseui-base/styles";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        {/* Top Branding/Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        ></div>

        {/* Main Headline */}
        <Text
          variant="xxl"
          weight="bold"
          style={{
            fontSize: "3.5rem",
            color: "#111827",
            marginBottom: "2rem",
            lineHeight: "1.1",
          }}
        >
          Design Systems That Scale With Your Brand
        </Text>

        {/* Descriptive Subheadline */}
        <Text
          variant="lg"
          style={{
            color: "#374151",
            marginBottom: "3rem",
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          An open-source, token-first design system for building multi-brand,
          responsive, accessible UIs — faster than ever.
        </Text>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <Button variant="filled" size="md">
            Explore Components
          </Button>
          <Button variant="outline" size="md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: "0.5rem" }}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Github
          </Button>
        </div>
      </div>

      {/* Profile Card and Content Card Section */}
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "1", maxWidth: "50%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <ProfileCard
                name="Vignesh Vishnumoorthy"
                email="vignesh@example.com"
                bio="Design System Architect and UI/UX Specialist with expertise in creating scalable, accessible design systems"
                hashtag="#designsystems"
                posts={156}
                followers={892}
                following={234}
              />
              <LoginForm />
            </div>
          </div>
          <div style={{ flex: "1", maxWidth: "50%" }}>
            <ContentCard
              title="Design System Benefits"
              description="Build consistent, scalable interfaces with our comprehensive component library and design tokens."
              imageUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop"
              imageAlt="Design System Benefits"
              date="2024"
              authorName="PulseUI Team"
              authorRole="Design System"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
