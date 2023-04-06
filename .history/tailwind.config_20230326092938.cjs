module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "san-serif"],
      },
      colors: {
        primary: "#13c6b2",
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
