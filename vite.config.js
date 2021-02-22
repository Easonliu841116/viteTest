import { resolve } from 'path'

import hbs from 'vite-plugin-handlebars'
import { minifyHtml } from 'vite-plugin-html'

import { OUTPUTPATH, ASSETSDIR } from './config'

export default {
  plugins: [
    process.env.NODE_ENV === 'production' && minifyHtml(),
    hbs({
      partialDirectory: resolve(__dirname, 'src/view'),
      context: {
        loop(n, block) {
          var accum = ''
          for (var i = 0; i < n; ++i) accum += block.fn(i)
          return accum
        },
        imgPath() {
          return process.env.NODE_ENV === 'production' ? `${OUTPUTPATH}/${ASSETSDIR}` : `src/${ASSETSDIR}`
        },
        title: '測試 title'
      }
    })
  ],
  base: process.env.NODE_ENV === 'production' ? `/${OUTPUTPATH}/` : '/',
  build: {
    assetsDir: ASSETSDIR,
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}
