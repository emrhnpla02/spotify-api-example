module.exports = {
  $schema: "http://json-schema.org/draft-04/schema#",
  pluginSearchDirs: false,
  plugins: [
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
};
