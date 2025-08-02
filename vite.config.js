// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set your preferred port
    open: true // Automatically open browser
  },
  build: {
    outDir: 'dist', // Output directory for production build
    emptyOutDir: true // Clean the output directory before build
  }
})