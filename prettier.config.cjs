module.exports = {
  $schema: "http://json-schema.org/draft-04/schema#",
  pluginSearchDirs: false,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
