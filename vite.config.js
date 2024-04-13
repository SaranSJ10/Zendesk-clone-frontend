import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() // This will load your .env file

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.API_URL, // Using the environment variable here
        secure: false,
      },
    },
  },
  plugins: [react()],
})
