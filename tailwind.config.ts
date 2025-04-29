import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px", // or whatever size you want
      },
      backgroundImage: {
        "sectionone-bg": "url('/images/footer-bg.PNG')",
        "white-islam-bg":
          "url('https://i.pinimg.com/736x/42/8a/91/428a91ebb8a40ee964b9cbd290febf06.jpg')",
        "white-bg":
          "url('https://img.freepik.com/premium-photo/abstract-arabesque-shadow-background-with-traditional-ornament-ramadan-islamic-design-end_430468-1709.jpg?semt=ais_hybrid&w=740')",
        big: "url('/images/dawah.jpg')",
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
