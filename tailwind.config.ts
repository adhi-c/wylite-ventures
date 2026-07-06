import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E7CC7A",
          dark: "#9C7F24",
        },
        surface: "#F8F8F8",
        graphite: "#2B2B2E",
        slate: "#5B5B60",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(0,0,0,0.25)",
        card: "0 10px 30px -10px rgba(0,0,0,0.15)",
      },
      keyframes: {
        drawline: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawline: "drawline 1.1s cubic-bezier(0.65,0,0.35,1) forwards",
        rise: "rise 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
