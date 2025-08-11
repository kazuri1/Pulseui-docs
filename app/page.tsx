"use client";

import { Button, Text, ProfileCard } from "pulseui-base";
import "pulseui-base/styles";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        paddingTop: "6rem",
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
          <Button variant="filled" size="sm">
            Explore Components
          </Button>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </div>

      {/* Profile Card Section */}
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "2rem",
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
      </div>
    </main>
  );
}
