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
        "primary": "#d41132",
        "primary-dark": "#b00e2a",
        "background-light": "#fcf8f9",
        "background-dark": "#221013",
        "text-main": "#1b0d10",
        "text-muted": "#9a4c59",
        "border-soft": "#f3e7e9",
        "border-strong": "#e7cfd3",
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