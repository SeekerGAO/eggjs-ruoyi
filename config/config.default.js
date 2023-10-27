/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1698049631342_192';

  // mysql config
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'ry-vue',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1698049631342_192';

  // add your middleware config here
  exports.middleware = [ 'robot' ];

  // robot's configurations
  exports.robot = {
    ua: [ /Baiduspider/i ],
  };

  // 添加 view 配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: '93107',
    secret: '85c8c55c19d95f4bba33e8c0fa9eb57fb0bb50ee',
  };

  config.security = {
    csrf: {
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  config.jwt = {
    secret: 'QGcEv0BSJIT7CnfX46CLk5fv44csGe3a', // 自定义 token 的加密条件字符串
    sign: {
      expiresIn: 24 * (60 * 60), // token 过期时间，单位为秒
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
