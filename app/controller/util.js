'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
const crypto = require('crypto');

class UtilController extends Controller {
  async captchaImage() {
    const { ctx } = this;
    const uuid = crypto.randomUUID().replace(/-/g, '');
    const captcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '012iIlLoOzZ',
      noise: 3,
      background: '#d8e3e7',
    });
    ctx.session.uuid = uuid;
    ctx.session.captcha = captcha.text;
    ctx.body = {
      code: 200,
      img: captcha.data,
      uuid,
      msg: '成功',
    };
  }
}

module.exports = UtilController;
