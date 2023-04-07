const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    backgroundColor: "#2e2c29",
  });

  const secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
  });

  mainWindow.loadFile("index.html");

  secondWindow.loadURL('https://www.digitalocean.com/')

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
