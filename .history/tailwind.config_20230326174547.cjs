module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "san-serif"],
      },
      colors: {
        primary: "#13c6b2",
        "overlay-30": "rgba(0,0,0,0.3)",
        "overlay-60": "rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
