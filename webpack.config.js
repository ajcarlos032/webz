/**
 * This file is only in the project for eslint module resolution config
 * for our custom import path of @hhs so that eslint knows we're aliasing
 *
 */

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@root': path.resolve(__dirname, 'src'),
      '@sagas': path.resolve(__dirname, 'src/sagas'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@temp': path.resolve(__dirname, 'src/temp'),
      '@theme': path.resolve(__dirname, 'src/theme'),
    },
    extensions: ['.android.js', '.ios.js', '.js'],
  },
}
