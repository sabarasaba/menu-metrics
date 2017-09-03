const path = require('path')
const menubar = require('menubar')

console.log(path.join(__dirname, 'app/build/'));

const mb = menubar({
  dir: path.join(__dirname, 'app/build/')
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
