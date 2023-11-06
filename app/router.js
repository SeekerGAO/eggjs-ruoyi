'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  const verifyJWT = app.middleware.verifyJWT();

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user/list', verifyJWT, controller.user.list);
  router.get('/captchaImage', controller.util.captchaImage);
  router.post('/login', controller.login.index);
  router.resources('sysUser', '/sysUser', controller.sysUser);

  io.of('/').route('chat', io.controller.chat.index);
  io.of('/').route('message', io.controller.chat.message);
  io.of('/').route('join', io.controller.chat.join);
};
