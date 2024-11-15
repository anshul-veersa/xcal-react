import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/app/federated/web-components"),
      formats: ["es"],
    },
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
