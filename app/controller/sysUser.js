'use strict';

const Controller = require('egg').Controller;

class SysUserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const toInteger = ctx.helper.lodash.toInteger;
    const query = {
      pageNum: toInteger(ctx.query.pageNum) || 1,
      pageSize: toInteger(ctx.query.pageSize) || 10,
    };
    const { count, rows } = await ctx.service.sysUser.list(query);
    ctx.body = {
      code: 200,
      data: rows,
      total: count,
      msg: '成功',
    };
  }

  async show() {
    const ctx = this.ctx;
    const user = await ctx.service.sysUser.find(ctx.params.id);
    if (user) {
      ctx.body = {
        code: 200,
        data: user,
        msg: '成功',
      };
    } else {
      ctx.body = {
        code: 500,
        msg: '失败',
      };
    }
  }

  async create() {
    const ctx = this.ctx;
    const { user_name, password, nick_name } = ctx.request.body;
    if (user_name && password && nick_name) {
      const user = await ctx.service.sysUser.create(ctx.request.body);
      if (user) {
        ctx.body = {
          code: 200,
          msg: '成功',
        };
      } else {
        ctx.body = {
          code: 500,
          msg: '失败',
        };
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '参数错误',
      };
    }
  }

  async update() {
    const ctx = this.ctx;
    const user = await ctx.service.sysUser.update(ctx.params.id, ctx.request.body);
    if (user) {
      ctx.body = {
        code: 200,
        msg: '成功',
      };
    } else {
      ctx.body = {
        code: 500,
        msg: '失败',
      };
    }
  }

  async destroy() {
    const ctx = this.ctx;
    const user = await ctx.service.sysUser.del(ctx.params.id);
    if (user) {
      ctx.body = {
        code: 200,
        msg: '成功',
      };
    } else {
      ctx.body = {
        code: 500,
        msg: '失败',
      };
    }
  }
}

module.exports = SysUserController;
