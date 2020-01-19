/*
 * @Description: socket事件类
 * @Author: chengDong
 * @Date: 2020-01-17 10:00:23
 * @LastEditTime : 2020-01-19 16:18:29
 * @LastEditors  : chengDong
 */

 const { login, create } = require('../listener/userListener')

function initSocket(socketClient) {
    // socketClient.use((packet,next)=>{
    //    console.log("token : " + socketClient.handshake.query.token)
    //    if(!socketClient.handshake.query.token) {
    //     if (packet[0] == 'login') {
    //         console.log('xx')
    //         return next()
    //     }
    //    } else {
    //       return next()
    //    }
    // })
    socketClient.on('login',login)
    socketClient.on('create',create)
}

module.exports = {
    initSocket
}