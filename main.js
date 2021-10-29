var bsWS = new BSDataPuller()
var obsWS = new OBSWebSocket()

var isOBSReady = false
var isBSReady = false
var isCurrentSceneInLevel = false

const button = document.querySelector('#button-apply')
const bsIP = document.querySelector('#bs-ip')

const obsIP = document.querySelector('#obs-ip')
const obsPassword = document.querySelector('#obs-password')
const obsGameScene = document.querySelector('#obs-game-scene')
const obsMenuScene = document.querySelector('#obs-menu-scene')

const bsStatus = document.querySelector('#bs-status')
const obsStatus = document.querySelector('#obs-status')

document.addEventListener('DOMContentLoaded', function () {
    bsIP.value = window.localStorage.getItem('bs-ip') || '127.0.0.1:2946'
    obsIP.value = window.localStorage.getItem('obs-ip') || '127.0.0.1:4444'
    obsPassword.value = window.localStorage.getItem('obs-password') || ''
    obsGameScene.value = window.localStorage.getItem('obs-game-scene') || ''
    obsMenuScene.value = window.localStorage.getItem('obs-menu-scene') || ''
});

button.onclick = () => {
    isOBSReady = false
    isBSReady = false
    updateOBSStatus()
    updateBSStatus()

    connectOBS(obsIP.value, obsPassword.value)
    connectBS(bsIP.value)

    window.localStorage.setItem('bs-ip', bsIP.value)
    window.localStorage.setItem('obs-ip', obsIP.value)
    window.localStorage.setItem('obs-password', obsPassword.value)
    window.localStorage.setItem('obs-game-scene', obsGameScene.value)
    window.localStorage.setItem('obs-menu-scene', obsMenuScene.value)
}

// OBS
obsWS.on('ConnectionOpened', (data) => {
    console.log("Connected to OBS Websocket ✅")
    isOBSReady = true
    updateOBSStatus()
})

obsWS.on('ConnectionClosed', (data) => {
    console.log("OBS Websocket disconnected ❌")
    isOBSReady = false
    updateOBSStatus()
})

// BSDataPuller
bsWS.onmessage = (message) => {
    if(!isOBSReady) return
    const inLevel = message['InLevel']

    if(inLevel == isCurrentSceneInLevel) return;
    console.log("Switching scene...")
    if(inLevel) {
        changeScene(obsGameScene.value)
    } else {
        changeScene(obsMenuScene.value)
    }

    isCurrentSceneInLevel = inLevel
}

bsWS.onconnect = () => {
    console.log("Connected to BSDataPuller ✅")
    isBSReady = true
    updateBSStatus()
}

bsWS.ondisconnect = () => {
    console.log("BSDataPuller disconnected ❌")
    isBSReady = false
    updateBSStatus()
}

// OBS Functions
function connectOBS(ip, password) {
    obsWS.connect({
        "address": ip,
        "password": password
    })
}

function connectBS(ip) {
    bsWS.connect(ip)
}

function changeScene(name) {
    if(!name) return
    obsWS.send('SetCurrentScene', {
        'scene-name': name
    });
}

// Status Updates
function updateOBSStatus() {
    const emoji = isOBSReady ? '✅' : '❌'
    obsStatus.innerHTML = 'OBS Websocket Status: ' + emoji
}

function updateBSStatus() {
    const emoji = isBSReady ? '✅' : '❌'
    bsStatus.innerHTML = 'BSDataPuller Status: ' + emoji
}