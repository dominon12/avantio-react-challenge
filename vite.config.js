import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  test: {
    exclude: ["node_modules", "**/e2e/**"],
  },
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      output: { format: "es" },
    },
  },
  server: { port: 3000 },
});
