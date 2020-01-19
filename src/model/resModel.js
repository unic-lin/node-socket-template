/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-01-19 16:43:28
 * @LastEditTime : 2020-01-19 16:55:27
 * @LastEditors  : chengDong
 */


class BaseModel{
    constructor({code, status, message, data}) {
        this.code = code
        if (data) {
            this.data = data
        }
        if (status) {
            this.status = status
        }
        if (message) {
            this.message = message
        }
    }
}


class SuccessModel extends BaseModel{
    constructor(data = {}) {
        super({
            code: 0,
            status: '请求成功',
            data
        })
    }
}

class ErrorModel extends BaseModel{
    constructor({ code, message}) {
        super({
            code,
            status: '请求失败',
            message
        })
    }
}


module.exports = {
    SuccessModel,
    ErrorModel
}