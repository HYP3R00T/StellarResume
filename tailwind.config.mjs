import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkest: "var(--darkest)",
        darker: "var(--darker)",
        dark: "var(--dark)",
        light: "var(--light)",
        lighter: "var(--lighter)",
        lightest: "var(--lightest)",
        white: "var(--white)",
        accent: "var(--accent)",
        accenttransparent: "var(--accent-transparent)",
      },
      maxWidth: {
        a4: "210mm",
      },
      fontFamily: {
        sans: ["Noto Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.625rem",
        "13px": "13px",
      },
    },
  },
  plugins: [],
};
