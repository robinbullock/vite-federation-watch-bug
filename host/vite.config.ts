import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  server: {
    https: false,
    host: 'localhost',
    port: 5173,
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
      remotes: {
        remote: {
          external: 'http://localhost:5174/dist/assets/remoteEntry.js',
          externalType: 'url',
          format: 'esm',
          from: 'vite',
        },
      },
    }),
  ],
})
