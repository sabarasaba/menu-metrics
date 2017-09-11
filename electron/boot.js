const { Menu } = require('electron')
const menubar = require('menubar')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const appPath = isDev
  ? { index: 'http://localhost:5000' }
  : { dir: path.join(__dirname, '../build/') }

const mb = menubar(Object.assign({
  height: 600,
  resizable: false
}, appPath))

mb.on('ready', function ready () {
  console.log('app is ready')

  const template = [{
    label: "Application",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { mb.app.quit() }}
    ]}, {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
      ]}
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})

if (isDev) {
  mb.on('after-create-window', () => mb.window.openDevTools())
}
