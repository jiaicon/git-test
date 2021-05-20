/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614675387861_5328';

  // add your middleware config here
  config.middleware = [ 'verifyCSRF' ];
  config.verifyCSRF = {
    match: '/admin',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ '*' ], // ['http://localhost:8080']
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.session = {
    key: 'SESSION_ID', // 设置 Session cookies 里面的 key
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
    renew: true, // 每次刷新页面，Session 都会被延期。
  };
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view/dist'),
    ].join(','),
    mapping: {
      '.ejs': 'ejs',
      // '.njk': 'nunjucks',
      // '.html': 'nunjucks',
    },
  };
  config.jwt = {
    secret: '19940401',
    expiresIn: '1800s',
  };

  return {
    ...config,
    ...userConfig,
  };
};
