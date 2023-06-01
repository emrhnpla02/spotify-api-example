/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "red-lavender-peach": ["#ED8796", "#B7BDF8", "#F5A97F"],
      },
      linearBorderGradients: (theme) => ({
        colors: theme("colors"),
      }),
    }
    ,
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "macchiato",
    }),
    require("tailwindcss-border-gradients")(),
  ],
}
