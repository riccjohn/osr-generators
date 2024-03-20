/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  build: { lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] } },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [eslint()],
  test: {
    setupFiles: ['./setupTests.ts'],
    coverage: {
      thresholds: {
        lines: 95,
        branches: 95,
        functions: 95,
        statements: 95,
      },
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts}'],
    },
  },
})
