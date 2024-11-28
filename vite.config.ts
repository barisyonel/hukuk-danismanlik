import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hukuk-danismanlik/',
  build: {
    rollupOptions: {
      external: [
        '/hukuk-danismanlik/src/main.tsx', // Rollup'un hata aldığı yolu buraya ekliyoruz
      ],
    },
  },
});
