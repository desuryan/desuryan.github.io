import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// User site https://panda.github.io — served at repo root (base: '/')
export default defineConfig({
  base: '/',
  plugins: [react()],
})
