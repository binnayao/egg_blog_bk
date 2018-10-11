'use strict';

// had enabled by egg
// exports.static = true;

// 添加插件, 解决跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 添加mongoosedb的数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
