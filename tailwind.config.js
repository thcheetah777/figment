import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      danger: colors.rose,
      warning: colors.amber,
      success: colors.emerald,
      neutral: {
        DEFAULT: colors.neutral[500],
        light: colors.neutral[300],
        extralight: colors.neutral[100],
      },

      primary: {
        DEFAULT: colors.teal[400],
        dark: colors.teal[500],
      }
    },
    fontFamily: {
      sans: ["Inter Variable", "sans-serif"],
    },
    extend: {
      fontSize: {
        "h1": defaultTheme.fontSize["2xl"],
      }
    },
  },
  plugins: [],
}

