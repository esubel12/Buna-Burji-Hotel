import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Buna-Burji-Hotel/',
  envPrefix: ['VITE_', 'NEXT_PUBLIC_']
})