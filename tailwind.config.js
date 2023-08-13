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