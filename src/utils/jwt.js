/*
 * @Description: jwt工具
 * @Author: chengDong
 * @Date: 2020-01-19 09:20:25
 * @LastEditTime : 2020-01-19 16:00:37
 * @LastEditors  : chengDong
 */
const jwt = require('jsonwebtoken')
const { JWT } = require('../constans/constans')

class JwtUtil{
    /**
     * 生成token密钥
     * @param {Object} payload 
     */
    static generateToekn(payload) {
        Object.assign(payload, {exp: JWT.exp})
        const token = jwt.sign(payload, JWT.secret)
        return token
    }

    static verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token,JWT.secret, (err, decode) => {
                if (err) {
                    reject(err)
                }
                resolve(decode)
            })
        })
    }
}

module.exports = {
    JwtUtil
}