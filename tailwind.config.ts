import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#475467",
        line: "#d9dee8",
        paper: "#f7f8fa",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 24, 40, 0.10)",
        glow: "0 28px 90px rgba(23, 92, 211, 0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
