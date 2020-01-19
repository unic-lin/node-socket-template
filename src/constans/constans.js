/*
 * @Description: 产量文件
 * @Author: chengDong
 * @Date: 2020-01-19 09:21:34
 * @LastEditTime : 2020-01-19 09:46:25
 * @LastEditors  : chengDong
 */
module.exports = {
    JWT:{
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1hours
        secret:'gfjgfjbfj'
    }
}