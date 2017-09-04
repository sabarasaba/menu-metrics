const path = require('path')
const menubar = require('menubar')

const mb = menubar({
  dir: path.join(__dirname, 'app/build/'),
  height: 600
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
