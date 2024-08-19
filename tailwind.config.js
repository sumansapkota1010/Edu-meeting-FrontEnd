/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f272b",
        "primary-light": "#FAFAFA26",

        secondary: "#FB2E86",
      },
      backdropBlur: {
        md: "12px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      maxWidth: {
        540: "540px",
        720: "720px",
        960: "960px",
        1140: "1140px",
        1320: "1320px",
      },
      padding: {
        custom: "291px",
      },
    },
  },
  plugins: [],
};
