/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'] },
  },
  plugins: [eslint()],
  test: {
    setupFiles: ['./setupTests.ts'],
    globals: true,
    coverage: {
      thresholds: {
        lines: 95,
        branches: 95,
        functions: 95,
        statements: 95,
      },
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['src/main.ts', '**/__mocks__/*', '**/index.ts'],
    },
  },
})
