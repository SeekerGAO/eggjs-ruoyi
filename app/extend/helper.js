const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

module.exports = {
  // 时间戳转换为相对时间
  relativeTime: time => dayjs(new Date(time * 1000)).fromNow(),
  // 生成JWT
  async generateJWT(data) {
    return this.ctx.app.jwt.sign(data, this.app.config.jwt.secret);
  },
};
