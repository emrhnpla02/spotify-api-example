import path from "path";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
