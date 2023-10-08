/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        cario: ['Cairo', 'sans-serif'],
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
          "card": "#1A1830",
          "card-dark": "#0A0A10",
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
          "progress": "#6B7280",
          "circle": "#707070",
          "card": "#41495F",
          "text": "#fff",
          "input": "#252A40",
          "dark-input": "#232332",
          "disabled": "#2D3748"
        },
        "red": "#EF4444",
        "green": "#29A35A",
      },
      boxShadow: {
        'dark-inset': '0 4px 20px 0px rgba(0, 0, 0, 0.60) inset, 0 8px 24px 0px rgba(0, 0, 0, 0.25) inset',
        'dark-ouset': '6px 6px 15.2px 0px rgba(0, 0, 0, 0.57)',
        'light-inset': '0px 4.21px 4.21px 0px rgba(249,247, 243, 0.25) inset, 0px -4.21px 4.21px 0px rgba(0, 0, 0, 0.25) inset',
        'light-ouset': '4px 4px 24px 0px rgba(74, 73, 224, 0.51)'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}