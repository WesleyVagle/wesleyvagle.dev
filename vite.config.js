import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Custom plugin to modify asset paths
function customBasePlugin() {
  return {
    name: 'custom-base-plugin',
    enforce: 'post',
    generateBundle(options, bundle) {
      for (const file in bundle) {
        if (bundle[file].type === 'asset' && file.startsWith('public/')) {
          bundle[file].fileName = file.replace(/^public\//, '')
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '', // Set base to an empty string
  plugins: [
    vue(),
    customBasePlugin() // Use the custom plugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url))
      }
    }
  }
})