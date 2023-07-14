module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 600: "#358279", "600_01": "#3d7095" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        teal: { 200: "#83d7cd", 700: "#037e6f", "200_cc": "#7be2c3cc" },
        blue: { 100: "#c0e2fb" },
        white: { A700: "#ffffff" },
        gray: { 100: "#f5f5f5" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#c0e2fb,#7be2c3cc)",
        gradient1: "linear-gradient(135deg ,#83d7cd,#c0e2fb)",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 7px  6px 0px #0000003f",
        bs2: "2px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
