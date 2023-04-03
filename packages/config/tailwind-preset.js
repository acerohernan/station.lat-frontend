/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        h1: "3rem",
        h2: "2.25rem",
        h3: "1.5rem",
        h4: "1.125rem",
        h5: "1rem",
        h6: "0.875rem",
      },
      colors: {
        blue_primary: "#2499EF",
        blue_secondary: "#196BA7",
        blue_light: "#D3E6F3",
        blue_dark: "#121F43",

        red_danger: "#FF316F",

        black_primary: "#373D3F",
        black_secondary: "#171C24",
        black_tertiary: "#222B36",

        green_success: "#27CE88",

        yellow_warning: "#FFC675",

        gray_light: "#F3F4F9",
        gray_secondary: "#8CA3BA",
        gray_tertiary: "#DCE3EA",
        gray_dark: "#5F748D",
      },
      boxShadow: {
        card: "0px 2px 1px -1px rgba(95, 116, 141, 0.25)",
      },
      zIndex: {
        sidebar: "50",
        overlay: "40",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
