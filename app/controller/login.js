'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      // 校验参数
      ctx.validate({
        username: { type: 'string' },
        password: { type: 'string' },
      });
      const result = await ctx.service.login.index(ctx.request.body);
      if (result) {
        ctx.body = { code: 200, data: result, msg: '登录成功' };
      } else {
        ctx.body = { code: 500, msg: '账户或密码错误' };
      }
    } catch (error) {
      this.logger.warn(error.message);
      ctx.body = { code: 500, msg: '参数错误' };
    }
  }
}

module.exports = LoginController;
