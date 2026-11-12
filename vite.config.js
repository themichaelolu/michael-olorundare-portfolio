import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    rollupOptions: {
      // Each case study is its own HTML entry so it ships static <title>, meta and Open Graph tags.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        serviceflow: fileURLToPath(new URL('./projects/serviceflow/index.html', import.meta.url)),
      },
    },
  },
})
