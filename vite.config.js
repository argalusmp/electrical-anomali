import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist'
  },
  preview: {
    port: 3000,
    host: true
  },
  // Configure for SPA routing
  server: {
    historyApiFallback: true
  }
})
