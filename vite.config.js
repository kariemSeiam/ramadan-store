import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom'
    }
  },
  base: '/ramadan-store/',
  build: {
    rollupOptions: {
      input: {
        fallback: './404.html', // Ensure this file exists in the public folder
      },
    },
  },
});
