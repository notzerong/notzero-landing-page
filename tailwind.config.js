/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#f2c94c",
        primaryblue: "#1A73E8"
      },
      width: {
        "10/10": "27%"
      }
    },
    fontFamily: {
      muli: ["Muli", "sans-serif"],
      poppins: ["Poppins", "sans-serif"]
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primaryblue: "#1A73E8"
    })
  },
  variants: {},
  plugins: []
};
