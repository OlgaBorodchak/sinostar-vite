import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
