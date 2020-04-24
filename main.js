'use strict';

const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);

let win;

function createWindow() {
  // Cria a tela do browser
  win = new BrowserWindow({
    'minHeight': 600,
    'minWidth': 600,
    // width: 600,
    // height: 600,
    backgroundColor: '#ffff',
    icon: `file://${__dirname}/src/assets/img/logo.png`,
    webPreferences: {
      nodeIntegration: true,
      allowEval: false
    }
  });

  win.maximize();
  win.loadURL(`file://${__dirname}/dist/automation-pipeline/index.html`);
  // Descomente a linha abaixo para abrir o DevTools
  // win.webContents.openDevTools();

  // Evento ocorrido ao fechar a tela
  win.on('closed', function() {
    win = null;
  });
}

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow)

// // Cria a tela na inicialização do electron
// app.on('ready', createWindow);

// Finaliza quando todas as telas são fechadas
app.on('window-all-closed', function() {
  // Finalização do processo no macOs
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // Fecha processo específico no macOs
  if (win == null) {
    createWindow();
  }
});



// const shell = require('shelljs');
// const out = shell.exec('docker container ls', { silent: true, async: false });

// shell.echo(out);
