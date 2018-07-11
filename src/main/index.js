import electron from "electron";

const { app, BrowserWindow } = electron

let win;

app.on("ready", () => {
    win = new BrowserWindow();
    win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
});