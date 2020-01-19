/*
 * @Description: mysql连接池
 * @Author: chengDong
 * @Date: 2020-01-19 16:28:33
 * @LastEditTime : 2020-01-19 16:31:53
 * @LastEditors  : chengDong
 */


const Sequelize = require('sequelize')

const { MYSQL_CONF } = require('../config/index')

const { host, user, password, database, port } = MYSQL_CONF

const conf = {
    host,
    port,
    dialect: 'mysql'
}

conf.pool = {
    max:3,
    min:1,
    idle: 1000
}

const seq = new Sequelize(database,user,password,conf)

module.exports = {
    seq
}