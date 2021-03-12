'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwt = middleware.verifyToken(app.config.jwt);
  // 基础的上传图片接口
  router.post('/api/upload_img', controller.uploadController.upload_img);
  router.post('/api/upload_file', controller.uploadController.upload_file);

  router.post('/api/article/create', jwt, controller.articleController.create);
  router.delete('/api/article/destroy/:id', jwt, controller.articleController.destroy);
  router.get('/api/article/list', jwt, controller.articleController.list);
  router.get('/api/article/:id', jwt, controller.articleController.view);
  router.put('/api/article/update/:id', jwt, controller.articleController.update);

  router.post('/api/login', controller.userController.login);
  router.post('/api/register', controller.userController.register);
  router.get('/api/user', jwt, controller.userController.info);
  router.put('/api/user/:id', jwt, controller.userController.update);
  router.get('/api/currentUser', jwt, controller.userController.currentUser);

  // router.get('/', '/*', controller.home.index);
  router.get('*', controller.home.home);
};
