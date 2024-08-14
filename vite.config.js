import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three': resolve('./node_modules/three')
    },
    extensions: ['.jsx'],
  },
  optimizeDeps: {
    include: ['three']
  }
})
