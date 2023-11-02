'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const message = this.ctx.args[0];
    await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}

module.exports = ChatController;
