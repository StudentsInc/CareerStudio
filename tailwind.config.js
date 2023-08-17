/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#252a40",
          "200": "#131320",
        },
        white: "#fff",
        mediumblue: "#3d3bff",
        "text-label": "#55597d",
        "text-normal": "#adb3cc",
      },
      fontFamily: {
        "body-text-main-content": "Montserrat",
      },
      borderRadius: {
        "6xs-6": "6.6px",
      },
    },
    fontSize: {
      "sm-8": "13.8px",
      base: "16px",
      "23xl": "42px",
      sm: "14px",
      "4xs-2": "8.2px",
      "sm-1": "13.1px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
