/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#605BFF",
        secondary: "#FF6B6B",
        accent: "#4ECDC4",
        background: "#F8F9FA",
        text: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.1)",
        strong: "0 4px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
