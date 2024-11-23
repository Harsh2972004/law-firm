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
      },
      fontFamily: {
        montserrat: "Montserrat",
        lora: "Lora",
      },
    },
  },
  plugins: [],
};
