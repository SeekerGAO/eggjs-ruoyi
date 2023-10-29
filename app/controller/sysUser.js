'use strict';

const Controller = require('egg').Controller;

class SysUserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const query = {
      pageNum,
      pageSize,
    };
    ctx.body = await ctx.model.SysUser.findAndCountAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.SysUser.findByPk(ctx.params.id);
  }

  async create() {
    const ctx = this.ctx;
    const { username, password, nickname } = ctx.request.body;
    const user = await ctx.model.SysUser.create({ user_name: username, password, nick_name: nickname });
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const user = await ctx.model.SysUser.findByPk(ctx.params.id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { nickname } = ctx.request.body;
    await user.update({ nick_name: nickname });

    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const user = await ctx.model.SysUser.findByPk(ctx.params.id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = SysUserController;
