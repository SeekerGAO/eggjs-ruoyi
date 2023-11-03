'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const message = this.ctx.args[0];
    await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
  async join() {
    const { ctx } = this;
    const userId = ctx.args[0];
    const socketId = ctx.socket.id;
    console.log('socketId:', userId, socketId);
    ctx.socket.join('all');
    ctx.socket.emit('joined', userId);
    // ctx.socket.to('all').emit("joined", userId);
    await ctx.app.redis.set(userId, socketId);
  }
  async message() {
    const { ctx } = this;
    const message = ctx.args[0];
    const { userId, msg } = message;
    if (userId === 'ADMIN') {
      ctx.socket.to('all').emit('msg', { userId, msg });
      return;
    }
    const socketId = await this.ctx.app.redis.get(userId);
    console.log(socketId);
    ctx.socket.to(socketId).emit('msg', { msg });
  }
}

module.exports = ChatController;
