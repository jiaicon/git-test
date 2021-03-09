'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 基础的上传图片接口
  router.post('/api/upload_img', controller.uploadController.upload_img);
  router.post('/api/upload_file', controller.uploadController.upload_file);

  router.post('/api/article/create', controller.articleController.create);
  router.delete('/api/article/destroy/{id}', controller.articleController.destroy);
  router.get('/api/article/list', controller.articleController.list);
  router.put('/api/article/update/{id}', controller.articleController.update);

  router.post('/api/login', controller.userController.login);
  router.post('/api/register', controller.userController.register);
  router.get('/api/user', controller.userController.info);

  // router.get('/', '/*', controller.home.index);
  router.get('/admin', controller.home.home);
};
