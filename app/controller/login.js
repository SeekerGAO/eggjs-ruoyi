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
        code: { type: 'string' },
        uuid: { type: 'string' },
      });
      const token = await ctx.service.login.index(ctx.request.body);
      if (token) {
        ctx.body = { code: 200, token, msg: '登录成功' };
      } else {
        ctx.body = { code: 500, msg: '账户或密码错误' };
      }
    } catch (error) {
      this.logger.warn(error.message);
      ctx.body = { code: 500, msg: '参数错误' };
    }
  }

  async getInfo() {
    const { ctx } = this;
    const result = await ctx.service.login.getInfo();
    this.success(result);
  }
}

module.exports = LoginController;
