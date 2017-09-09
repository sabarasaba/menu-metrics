const menubar = require('menubar')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const appPath = isDev
  ? { index: 'http://localhost:5000' }
  : { dir: path.join(__dirname, '../build/') }

console.log(appPath)

const mb = menubar(Object.assign({
  height: 600,
  resizable: false
}, appPath))

mb.on('ready', function ready () {
  console.log('app is ready')
})

if (isDev) {
  mb.on('after-create-window', () => mb.window.openDevTools())
}
