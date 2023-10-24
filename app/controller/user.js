const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const ctx = this.ctx;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const { list, total } = await ctx.service.user.list(Number(pageNum), Number(pageSize));
    ctx.body = {
      code: 200,
      data: list,
      total,
      msg: '成功',
    };
  }
}

module.exports = UserController;
