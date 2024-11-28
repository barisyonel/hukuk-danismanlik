import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hukuk-danismanlik/",
  plugins: [react()],
  publicDir: "src/public", 
});
