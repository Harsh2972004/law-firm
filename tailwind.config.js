/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2c2e",
        para: "#4e6062",
        btn: "#8a6d2a",
        btnText: "#d1c39c",
        nav: "#b5bcbc",
        textGrey: "#e5e7e6",
      },
      fontFamily: {
        montserrat: "Montserrat",
        lora: "Lora",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
