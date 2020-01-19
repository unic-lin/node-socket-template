/*
 * @Description: 客户端
 * @Author: chengDong
 * @Date: 2020-01-17 09:19:13
 * @LastEditTime : 2020-01-17 11:48:41
 * @LastEditors  : chengDong
 */
const io = require('socket.io-client')
// 创建 带有token认证的io
const  chat = io.connect('http://localhost:8888/chat',{
    query: {
      token: 'cfe'
    }
  })

// 客户端获取该token: chat.io.opts.query
// 服务端获取token: socketClient.handshake.query.token
const news = io.connect('http://localhost:8888/news');


chat.on('connect', function () {
    console.log("客户端token获取"+ chat.io.opts.query.token)
    chat.emit('add', 'lcd')
});
// news.on('connect', function () {
//     chat.emit('remove', 'news')
// });