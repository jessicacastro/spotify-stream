import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(currentDir, '../')
const audioDir = join(rootDir, 'audio')
const publicDir = join(rootDir, 'public')

export default {
  port: process.env.PORT || 3000,
  dir: {
    rootDir,
    publicDir,
    audioDir,
    songsDir: join(audioDir, 'songs'),
    fxDir: join(audioDir, 'fx')
  },
  pages: {
    homeHTML: 'home/index.html',
    controllerHTML: 'controller/index.html'
  },
  location: {
    home: '/home'
  }
}