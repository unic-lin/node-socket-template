/*
 * @Description: 客户端
 * @Author: chengDong
 * @Date: 2020-01-17 09:19:13
 * @LastEditTime : 2020-01-19 16:56:27
 * @LastEditors  : chengDong
 */
const io = require('socket.io-client')
// 创建 带有token认证的io

const  chat = io.connect('http://localhost:8889/chat',{
    query: {
     
    },
    forceNew: true
  })

// 客户端获取该token: chat.io.opts.query
// 服务端获取token: socketClient.handshake.query.token
const news = io.connect('http://localhost:8889/news',{
    query:{
        token: 'abc'
    },
    forceNew: true
});


chat.on('connect', function () {
    console.log("客户端token获取"+ chat.io.opts.query.token)
    chat.emit('login', 'lcd','123',(data)=>{
        console.log(data)
    })
    chat.emit('create', {userName:'huizhou', password:'huiz', gender:2, nickName:'hz'},(data)=>{
        console.log(data)
    })
});
news.on('connect', function () {
    console.log("客户端token获取"+ news.io.opts.query.token)
    news.emit('login', 'lcd','123',(data)=>{
        console.log(data)
    })
});