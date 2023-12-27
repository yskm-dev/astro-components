import { defineConfig } from 'astro/config'
import autoprefixer from 'autoprefixer'
// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
      preprocessorOptions: {
        scss: {
          includePaths: ['node_modules'],
          additionalData: `@use "./src/styles/settings/_settings" as *;`,
        },
      },
    },
  },
})
