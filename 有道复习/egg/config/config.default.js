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
  config.middleware = ["verifyCSRF"];
  config.verifyCSRF = {
    match: "/admin"
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    origin:'*'
  };

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
