module.exports = () => {
  return async function verifyJWT(ctx, next) {
    const token = ctx.headers.authorization ? ctx.headers.authorization.split(' ')[1] : '';
    if (token) {
      try {
        ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
        await next();
      } catch (error) {
        ctx.body = {
          code: 500,
          msg: 'token已过期，请重新登录',
        };
      }
    } else {
      ctx.body = {
        code: 500,
        msg: 'token不存在',
      };
    }
  };
};
