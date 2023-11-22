module.exports = app => {
  const { BIGINT, STRING, CHAR, DATE } = app.Sequelize;

  const SysLogininfor = app.model.define(
    'SysLogininfor',
    {
      info_id: { type: BIGINT, primaryKey: true, autoIncrement: true, comment: '访问ID' },
      user_name: { type: STRING(50), defaultValue: '', comment: '用户账号' },
      ipaddr: { type: STRING(128), defaultValue: '', comment: '登录IP地址' },
      login_location: { type: STRING(255), defaultValue: '', comment: '登录地点' },
      browser: { type: STRING(50), defaultValue: '', comment: '浏览器类型' },
      os: { type: STRING(50), defaultValue: '', comment: '操作系统' },
      status: { type: CHAR, defaultValue: '0', comment: '登录状态（0成功 1失败）' },
      msg: { type: STRING(255), defaultValue: '', comment: '提示消息' },
      login_time: { type: DATE, comment: '访问时间' },
    },
    {
      tableName: 'sys_logininfor',
      comment: '系统访问记录',
      timestamps: false,
    }
  );

  return SysLogininfor;
};
