const BaseController = require('./app/core/base_controller');

module.exports = app => {
  app.Controller = BaseController;
  require('egg').Controller = BaseController;
};
