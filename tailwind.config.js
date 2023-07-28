/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": " #131320",
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
    },
  },
  plugins: [],
};
