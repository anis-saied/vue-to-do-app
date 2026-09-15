// vite.config.js

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-todo-app/',
  plugins: [vue(), tailwindcss()],
})
