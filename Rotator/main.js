const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 500,
    minHeight: 400,
    backgroundColor: '#0f0f0f',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0f0f0f',
      symbolColor: '#888',
      height: 44
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    },
    title: 'Rotateur'
  })

  win.loadFile('index.html')
})

app.on('window-all-closed', () => app.quit())
