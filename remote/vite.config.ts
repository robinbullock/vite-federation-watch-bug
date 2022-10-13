import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  server: {
    https: false,
    host: 'localhost',
    port: 5174,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
  },
  plugins: [
    federation({
      name: 'home',
      exposes: {
        './App': './src/App.tsx'
      }
    }),
  ],
})
