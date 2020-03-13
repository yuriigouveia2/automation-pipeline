const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // Cria a tela do browser
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffff',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);
  //// Descomente a linha abaixo para abrir o DevTools
  // win.webContents.openDevTools();

  // Evento ocorrido ao fechar a tela
  win.on('closed', function() {
    win = null;
  });
}

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


