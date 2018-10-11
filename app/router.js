'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/upload', controller.upload.index);
  router.post('/list', controller.list.index);
  router.post('/tag', controller.tag.index);
  router.post('/detail', controller.detail.index);
  router.post('/search/tag', controller.searchTag.index);
};
