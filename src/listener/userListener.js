/*
 * @Description: 用户事件
 * @Author: chengDong
 * @Date: 2020-01-19 08:58:05
 * @LastEditTime : 2020-01-19 16:52:10
 * @LastEditors  : chengDong
 */

const { JwtUtil } = require('../utils/jwt')
const { createUser } = require('../service/userService')
const  { SuccessModel, ErrorModel } = require('../model/resModel')
/**
 * 用户登录
 * @param {string} userName 
 * @param {string} password 
 */
 async function login( userName, password, callback) {
    const token = JwtUtil.generateToekn({userName})
    callback(token)
}

/**
 * 验证token是否有效
 * @param {string} token 
 */
async function verify(token) {
    const decode = await JwtUtil.verify(token)
    return decode
}

async function create({userName, password, nickName, gender }, callback) {
    const result = await createUser({userName, password, nickName, gender})
    const res = new SuccessModel(result)
    callback(res)
}

module.exports = {
    login,
    create
}