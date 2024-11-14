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
        sans: [
          "Hanken Grotesk Variable",
          "Noto Sans Variable",
          "Source Sans Pro",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        title: ["30pt", { lineHeight: "1.2" }],
        section: ["12pt", { lineHeight: "1.2" }],
        heading: ["11pt", { lineHeight: "1.2" }],
        // body: ["11pt"],
        body: ["11pt", { lineHeight: "1.3" }],
        minor: ["11pt", { lineHeight: "1.1" }],
      },
      spacing: {
        "a4-width": "210mm",
        "a4-height": "297mm",
      },
    },
  },
  plugins: [],
};
