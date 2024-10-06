import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]'
    }
  },
  resolve: {
    alias: {
      components: '/src/components',
      styles: '/src/assets/styles',
      api: '/src/api'
    }
  }
})
