import type { Config } from "tailwindcss";

// Palette mirrors strava-dashboard/tailwind.config.ts so both apps share one dark design system.
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Consonlas", "Courier New", "monospace"],
        display: ["Coolvetica", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#09090b",
        surface: {
          DEFAULT: "#09090b",
          card: "#111113",
          border: "#27272a",
          muted: "#1c1c1f",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        accent: {
          DEFAULT: "#64ffda",
          muted: "rgba(100, 255, 218, 0.85)",
        },
        purple: "#d1a2f9",
        danger: "#da3633",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
