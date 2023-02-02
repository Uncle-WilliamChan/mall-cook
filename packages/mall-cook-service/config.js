/*
 * @Description: 配置信息
 * @Autor: WangYuan
 * @Date: 2022-02-10 19:20:33
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-11-02 10:35:50
 */
config = {
  appid: 'xxx', // 小程序appId
  secret: 'xxx', // 小程序secret
  serviceApi: 'http://192.168.202.128:3000', // 服务器地址
  mongodbUrl: 'mongodb://localhost:27017/mall-cook', // mongodb数据库地址 格式：mongodb://username:password@host:port/name
  jwtSecret: 'secret'
}

module.exports = config
