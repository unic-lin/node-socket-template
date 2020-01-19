/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-01-19 16:33:29
 * @LastEditTime : 2020-01-19 16:37:14
 * @LastEditors  : chengDong
 */

 const { User } = require('../db/model/index')

async function createUser({userName, password, nickName,gender}) {
    const result = await User.create({userName, password, gender, nickName})
    return result.dataValues
}

module.exports = {
    createUser
}