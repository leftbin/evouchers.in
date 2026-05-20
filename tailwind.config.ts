import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        canvas: "#0F172A",
        paper: "#1E293B",
        elevated: "#334155",
        primary: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
          subtle: "rgba(16, 185, 129, 0.15)",
        },
        "on-surface": "#dae2fd",
        "on-surface-variant": "#94A3B8",
        "on-surface-muted": "#64748B",
        border: "#334155",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
        gold: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
        },
        role: {
          consumer: "#10B981",
          merchant: "#3B82F6",
          agent: "#F59E0B",
          admin: "#64748B",
        },
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-sm": [
          "36px",
          { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "headline-sm": [
          "20px",
          { lineHeight: "28px", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "28px", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "24px", fontWeight: "400" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "20px", fontWeight: "400" },
        ],
        "label-md": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" },
        ],
        financial: [
          "16px",
          { lineHeight: "24px", fontWeight: "600" },
        ],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
