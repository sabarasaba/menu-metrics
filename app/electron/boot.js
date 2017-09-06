const menubar = require('menubar')
const path = require('path')

const appPath = process.env.NODE_ENV === 'development'
  ? { index: 'http://localhost:5000' }
  : { dir: path.join(__dirname, 'app/build/') }

const mb = menubar(Object.assign({
  height: 600
}, appPath))

mb.on('ready', function ready () {
  console.log('app is ready')
})

mb.on('after-create-window', () => mb.window.openDevTools())

