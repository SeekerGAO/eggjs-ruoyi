'use strict';

const Service = require('egg').Service;

class SysUserService extends Service {
  async list({ pageNum, pageSize }) {
    return this.ctx.model.SysUser.findAndCountAll({
      limit: pageSize,
      offset: (pageNum - 1) * pageSize,
    });
  }

  async find(id) {
    return await this.ctx.model.SysUser.findByPk(id);
  }

  async create(payload) {
    return await this.ctx.model.SysUser.create(payload);
  }

  async update(id, payload) {
    const user = await this.ctx.model.SysUser.findByPk(id);
    try {
      return user.update(payload);
    } catch (error) {
      return null;
    }
  }

  async del(id) {
    const user = await this.ctx.model.SysUser.findByPk(id);
    try {
      return user.destroy();
    } catch (error) {
      return null;
    }
  }
}

module.exports = SysUserService;
