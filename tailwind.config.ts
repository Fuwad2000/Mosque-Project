import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sectionone-bg": "url('/images/footer-bg.PNG')",
        "about-bg": "url('/images/mosque_bg.jpg')",
        "soft-green-gradient": "linear-gradient(to bottom, #f9f9f9, #e8f5e9)",
        "light-form-gradient": "linear-gradient(to bottom, #ffffff, #f1f8f6)",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "green-main": "#2e7d32",
      },
      borderColor: {
        "green-main": "#2e7d32",
      },
      boxShadowColor: {
        "green-main": "#2e7d32",
      },
      backgroundColor: {
        "green-main": "#2e7d32",
      },
    },
  },
  plugins: [],
};
export default config;
