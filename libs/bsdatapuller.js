function BSDataPuller() {
    this._socket = undefined
    BSDataPuller.prototype.connect = function(ip) {
        if(this._socket) {
            this._socket.close()
        }

        const ws = new WebSocket(`ws://${ip}/BSDataPuller/MapData`)
        this._socket = ws

        ws.onopen = (event) => {
            this.onconnect()
        }

        ws.onclose = (event) => {
            this.ondisconnect()
        }

        ws.onmessage = (message) => {
            const data = message.data
            const dataJSON = JSON.parse(data)

            this.onmessage(dataJSON)
        }
    }

    BSDataPuller.prototype.onmessage = (message) => { }
    BSDataPuller.prototype.onconnect = () => { }
    BSDataPuller.prototype.ondisconnect = () => { }
}