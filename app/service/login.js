'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(payload) {
    const { ctx, app } = this;
    const { username, password, code, uuid } = payload;

    if (ctx.session.captcha.toLowerCase() !== code.toLowerCase() && ctx.session.uuid !== uuid) {
      ctx.body = { code: 500, msg: '验证码错误' };
      return;
    }

    const user = await app.mysql.get('sys_user', { user_name: username });
    if (user) {
      // 比对密码
      const checked = await ctx.compare(password, user.password);
      if (checked) {
        const token = await ctx.helper.generateJWT({ user });
        return token;
      }
    }
    return null;
  }
}

module.exports = LoginService;
