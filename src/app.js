/*
 * @Description: socket入口文件
 * @Author: chengDong
 * @Date: 2020-01-17 08:35:00
 * @LastEditTime : 2020-01-19 08:56:03
 * @LastEditors  : chengDong
 */

const { getServerClient } = require('./lib/socket')
const { initSocket } = require('./lib/socketEvent')




async function run() {
  try {
    const chat = await getServerClient('chat')
    chat.on('connection',(chatSocket) => {
        initSocket(chatSocket)
    })
    const news = await getServerClient('news')
    news.on('connection',(newClient) => {
        initSocket(newClient)
    })
  } catch (error) {
      console.log(error)
  }
}

run()