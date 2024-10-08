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
      pages: '/src/pages',
      components: '/src/components',
      styles: '/src/assets/styles',
      img: '/src/assets/img',
      api: '/src/api',
      utils: '/src/utils'
    }
  }
})
