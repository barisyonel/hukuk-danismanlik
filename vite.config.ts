import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/hukuk-danismanlik/" : "/", // Yalnızca production'da base ekle
  plugins: [react()],
}));
