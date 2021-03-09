/**
 * Created by icon on 2021/3/5
 * 解决create-react-app跨域问题
 * 1. 可以直接在package.json中设置proxy，但是不能灵活设置apiHost
 * 2. 使用http-proxy-middleware。
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:7001',
    changeOrigin: true
  }))
};
