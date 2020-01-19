/*
 * @Description: socket服务端client
 * @Author: chengDong
 * @Date: 2020-01-17 08:58:16
 * @LastEditTime : 2020-01-19 09:03:59
 * @LastEditors  : chengDong
 */
const http = require('http')
const server = http.createServer()
const io = require('socket.io')(server)

server.listen(8889,()=>{
    console.log(`server listen on 8889`)
})



class SocketClient{
    /**
     * 订阅某类型
     * @param {string} name 
     */
    constructor(name) {
        this.name = name
    }
    getServerClient() {
        return io.of(this.name)
    }

}

async function getServerClient(name) {
    const socketClient = new SocketClient(name)
    return socketClient.getServerClient()
}

module.exports = {
    getServerClient
}