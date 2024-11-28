import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible({
    prefix: 'REACT_APP_'
  })],
  server: {
    port: 3003,
    open: true
  }
})
