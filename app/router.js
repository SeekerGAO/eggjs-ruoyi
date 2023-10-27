'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const verifyJWT = app.middleware.verifyJWT();

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user/list', verifyJWT, controller.user.list);
  router.post('/login', controller.login.index);
};
