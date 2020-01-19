/*
 * @Description: 数据库类型
 * @Author: chengDong
 * @Date: 2020-01-19 16:23:40
 * @LastEditTime : 2020-01-19 16:25:54
 * @LastEditors  : chengDong
 */

const Sequelize = require('sequelize')

module.exports = {
    STRING: Sequelize.SMALLINT,
    DECIMAL: Sequelize.DECIMAL,
    TEXT: Sequelize.TEXT,
    INTEGER: Sequelize.INTEGER,
    BOOLEAN: Sequelize.BOOLEAN
}