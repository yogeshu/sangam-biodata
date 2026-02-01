import type { Config } from "tailwindcss";

const config: Config = {
  // 👇 THIS LINE IS MISSING OR INCORRECT
  darkMode: "class", 
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
        "text-main": "var(--color-text-main)",
        "text-muted": "var(--color-text-muted)",
        "border-soft": "var(--color-border-soft)",
        "border-strong": "var(--color-border-strong)",
        "midnight-accent": "#1E293B",
        "midnight-border": "#334155",
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