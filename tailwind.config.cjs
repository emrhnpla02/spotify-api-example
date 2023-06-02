/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red-lavender-peach": ["#ED8796", "#B7BDF8", "#F5A97F"],
        "lavender-flamingo-blue": ["#b7bdf8", "#f0c6c6", "#8aadf4"],
        "maroon-teal-": ["#ee99a0", "#8bd5ca", "#f5bde6"],
      },
      linearBorderGradients: (theme) => ({
        colors: theme("colors"),
      }),
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "macchiato",
    }),
    require("tailwindcss-border-gradients")(),
  ],
};
