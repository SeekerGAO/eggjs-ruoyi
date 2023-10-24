const Service = require('egg').Service;

class UserService extends Service {
  async list(pageNum, pageSize) {
    const list = await this.app.mysql.select('sys_user', {
      limit: pageSize,
      offset: (pageNum - 1) * pageSize,
    });
    const total = await this.app.mysql.count('sys_user');
    return { list, total };
  }
}

module.exports = UserService;
