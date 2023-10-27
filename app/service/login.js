'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(payload) {
    const { ctx, app } = this;
    const { username, password } = payload;
    const user = await app.mysql.get('sys_user', { user_name: username });
    if (user) {
      // 比对密码
      const checked = await ctx.compare(password, user.password);
      if (checked) {
        return user;
      }
    }
    return null;
  }
}

module.exports = LoginService;
