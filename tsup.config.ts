import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'node14', // Use 'browser' or 'node' based on your output target
  format: ['cjs', 'esm'], // CommonJS and ES Modules
  dts: true, // Generate types
  splitting: false, // Disable code-splitting for simplicity
  clean: true, // Clean output directory before bundling
})
