/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          "brand": "#3D3BFF",
          "secondary": "#4746DE",
          "text": "#7594FB",
          "progress": "#6097FF",
          "gradient": "#6665FF",
          "card-bg": "#1A1830",
          "card-bg-dark": "#0A0A10",
        },
        yellow: {
          "main": "#F8A76F",
          "secondary": "#FDAA6D",
        },
        purple: {
          "main": "#7860BD",
          "text-pct": "#C67BFF",
        },
        gray: {
          "bg-progress": "#6B7280",
          "bg-circle": "#707070",
          "bg-card": "#41495F",
          "text": "#fff",
          "bg-input": "#252A40",
          "bg-dark-input": "#232332",
          "disabled": "#2D3748"
        },
        "red": "#EF4444",
        "green": "#29A35A",
      },
      boxShadow: {
        'dark-inset': '0 4px 6px -1px rgba(0, 0, 0, 0.1) inset, 0 2px 4px -1px rgba(0, 0, 0, 0.06) inset',
        'light-inset': '0px 4.21px 4.21px 0px rgba(249,247, 243, 0.25) inset, 0px -4.21px 4.21px 0px rgba(0, 0, 0, 0.25) inset',
        'light-ouset': '4px 4px 24px 0px rgba(74, 73, 224, 0.51)'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}