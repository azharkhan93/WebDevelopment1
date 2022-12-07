const { app, BrowserWindow, globalShortcut, dialog, Tray, Menu, ipcMain, MenuItem } = require('electron')

// ipcMain.on("msg",(event,arg)=>{
// console.log(arg)

// })

// context menu
// let template = [{ label: 'item 1' }, { label: 'label 2' },{role:'Minimize'}];
// let contextMenu = Menu.buildFromTemplate(template)


// const windowStateKeeper = require('electron-window-state')
// let win;

// setTimeout(()=>{
// console.warn(app.isReady())
// },2000);

// console.warn("hello Duniyea")

// browser window properties
// let template = [
// { label: 'Blog', submenu: [{ label: 'about' }, { label: 'Version' },{role:'quit'}] },
// { label: 'File', submenu: [{ label: 'selectfile' }, { label: 'choose another file' }] },
// { label: 'Operations', submenu: [{ label: 'start' }, { label: 'End' }] },
// { label: 'End', submenu: [{ label: 'Quit' }, { label: 'Zoom' }] }

// ]
// let menu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(menu)
function creatWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html')
    win.webContents.on("context-menu", () => {
        contextMenu.popup();
    })
    // Tray = new Tray('pic.jpg')
    // Tray.setToolTip("tray for electron")

    // let template =[{label:'item1'},{label:'item2'}]
    // const contextMenu= menu.buildFromTemplate(template);
    // Tray. setContextMenu(contextMenu)

    //  globalShortcut.register("p", ()=>{
    //  dialog.showOpenDialog({
    //  defaultPath: app.getPath('desktop'),
    //  buttonLabel:'Select file'

    //  });
    //  })



    //  globalShortcut.register("k",()=>{
    //  win.loadFile("child.html")
    //  console.warn("k key pressed")
    //  })
     let wc = win.webContents;
    // wc.on('dom-ready', ()=>{
    // console.warn("your dom is ready")
    // })

    // wc.on('did-finish-load', ()=>{
    // console.warn("your dom is finished")
    // })


    // function creatWindow() {
    //let mainWindowState = windowStateKeeper({
    //     defaultHeight: 600,
    // defaultWidth: 400

    //})
    // const win = new BrowserWindow({
    //     width: mainWindowState.width,
    // height: mainWindowState.height,
    // resizable: false,
    // title: "Badiya app",
    //  frame: false,
    // backgroundColor: "#ff0000",
    // alwaysOnTop: true,
    // webPreferences: {
    // nodeIntegration: true
    // },

    // })
    // let child = new BrowserWindow({psrent:win})
    // child.loadFile("index.html")
    // child.show()


    // mainWindowState.manage(win)
    // win.webcontents.openDevTools()

    // }
    // app.whenReady().then(creatWindow)

    // events in electron
    // app.on('before-quit', (e) => {
    // console.warn("call before it quit")
    // e.prevenDefault();
    // })

    // app.on('will-quit', (e) => {
    // console.warn("call will  quit app")
    // e.prevenDefault();
    // })
    // app.on('browser-window-focus', ()=>{
    // console.warn("your on app")
    // })
    // app.on('browser-window-blur', ()=>{
    // console.warn("your oot of app")
    // })

    // app.on('ready', () => {
    // creatWindow();
    // console.warn(app.isReady())
    // console.warn("your app is ready")
    // })
}
app.whenReady().then(creatWindow)
