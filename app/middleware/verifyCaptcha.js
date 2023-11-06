module.exports = () => {
  return async function verifyCaptcha(ctx, next) {
    const { code, uuid } = ctx.request.body;
    const { captcha, uuid: UUID } = ctx.session;
    if (code.toLowerCase() !== captcha.toLowerCase() || uuid !== UUID) {
      ctx.body = { code: 500, msg: '验证码错误' };
    } else {
      await next();
    }
  };
};
