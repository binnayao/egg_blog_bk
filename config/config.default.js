'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538982979892_502';

  // add your config here
  config.middleware = [];
  // 暂时关闭安全验证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/binna', // 连接mongodb的某一个数据库
    options: {},
  };
  return config;
};
