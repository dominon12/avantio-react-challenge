import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      output: { format: "es" },
    },
  },
  server: { port: 3000 },
});
