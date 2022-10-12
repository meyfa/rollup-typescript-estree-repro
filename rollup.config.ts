import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

defineConfig({
  plugins: [
    typescript()
  ]
})
