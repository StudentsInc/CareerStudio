/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "4rem",
        lg: "6rem",
      },
    },
    extend: {
      fontSize: {
        heading: "3.75rem", //60px
        sub1: "2.063rem", // 33px
        sub2: "1.563rem", // 25px
        body: "1rem", // 16px
        "body-mobile": "0.875rem", // 14px
      },
      colors: {
        "background-color": "#121826", // "#131320",
        "blue-main": "#3D3BFF",
        "blue-text": "#4544DC",
        "blue-card-bg": "#1A1830",
        "blue-card-bg-dark": "#0A0A10",
        "blue-progress": "#6097FF",
        "purple-color": "#7860BD",
        "yellow-color": "#FFAB6B",
        "red-error": "#EF4444",
        "green-success": "#29A35A",
        "gray-progress-bar": "#6B7280",
        "gray-text": "#D1D5DB",
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        button: "4px 4px 24px 0px rgba(74, 73, 224, 0.51);",
      },
    },
  },
  plugins: [],
};
