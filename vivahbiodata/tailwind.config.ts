import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EAB308",
        "primary-dark": "#CA8A04",
        "background-light": "#F0F9FF",
        "background-dark": "#0A1628",
        "text-main": "#020617",
        "text-muted": "#475569",
        "border-soft": "#DBEAFE",
        "border-strong": "#93C5FD",
        "midnight-accent": "#0F1D35",
        "midnight-border": "#1E3A5F",
      },
      fontFamily: {
        "display": ["var(--font-noto-serif)", "serif"],
        "body": ["var(--font-noto-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;