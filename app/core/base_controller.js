'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data, msg = '成功') {
    this.ctx.body = {
      code: 200,
      ...data,
      msg,
    };
  }

  fail(msg = '失败') {
    this.ctx.body = {
      code: 500,
      msg,
    };
  }
}

module.exports = BaseController;
