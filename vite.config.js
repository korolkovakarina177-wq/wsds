import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Обязательно должен быть слеш для корневого деплоя на Vercel
  plugins: [react()],
})