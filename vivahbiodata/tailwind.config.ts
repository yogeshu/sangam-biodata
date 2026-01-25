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
        "primary": "#FAC638",
        "primary-dark": "#E6B429",
        "primary-light": "#FDD96A",
        "background-light": "#FFFEF9",
        "background-dark": "#1A1A1A",
        "text-main": "#1F1F1F",
        "text-muted": "#6B6B6B",
        "border-soft": "#F0EFE9",
        "border-strong": "#D4D3CD",
        "paper-cream": "#F5F1E8",
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