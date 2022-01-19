module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#070707",
        secondary: "#0F6EFF",
      },

      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Lato"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen 2xl": {
            maxWidth: "1170px",
          },
        },
      });
    },
    //  end
  ],
};
