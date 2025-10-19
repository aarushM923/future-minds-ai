import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { promises as fs } from 'fs'
import { resolve } from 'path'

function copyPublicImages() {
  return {
    name: 'copy-public-images',
    async closeBundle() {
      const srcDir = resolve(__dirname, 'public/images')
      const destDir = resolve(__dirname, 'dist/images')

      try {
        await fs.mkdir(destDir, { recursive: true })
        const files = await fs.readdir(srcDir)
        await Promise.all(
          files.map((file) =>
            fs.copyFile(resolve(srcDir, file), resolve(destDir, file))
          )
        )
        console.log('✅ Copied public/images → dist/images')
      } catch (err) {
        console.warn('⚠️ No images copied:', err.message)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyPublicImages()],
  base: '/future-minds-ai/',
})
