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

  async getInfo() {
    const { ctx } = this;
    const token = ctx.headers.authorization ? ctx.headers.authorization.split(' ')[1] : '';
    const { user } = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
    const { user_id } = user;
    const roles = [];
    const permissions = [];
    if (user_id === 1) {
      roles.push('admin');
      permissions.push('*:*:*');
    } else {
      roles.push('common');
      permissions.push('*:*:*');
    }
    return { user, roles, permissions };
  }
}

module.exports = LoginService;
