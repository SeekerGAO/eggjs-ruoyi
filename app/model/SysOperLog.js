module.exports = app => {
  const { BIGINT, STRING, INTEGER, DATE } = app.Sequelize;

  const SysOperLog = app.model.define(
    'SysOperLog',
    {
      oper_id: { type: BIGINT, primaryKey: true, autoIncrement: true, comment: '日志主键' },
      title: { type: STRING(50), defaultValue: '', comment: '模块标题' },
      business_type: { type: INTEGER, defaultValue: 0, comment: '业务类型（0其它 1新增 2修改 3删除）' },
      method: { type: STRING(100), defaultValue: '', comment: '方法名称' },
      request_method: { type: STRING(10), defaultValue: '', comment: '请求方式' },
      operator_type: { type: INTEGER, defaultValue: 0, comment: '操作类别（0其它 1后台用户 2手机端用户）' },
      oper_name: { type: STRING(50), defaultValue: '', comment: '操作人员' },
      dept_name: { type: STRING(50), defaultValue: '', comment: '部门名称' },
      oper_url: { type: STRING(255), defaultValue: '', comment: '请求URL' },
      oper_ip: { type: STRING(128), defaultValue: '', comment: '主机地址' },
      oper_location: { type: STRING(255), defaultValue: '', comment: '操作地点' },
      oper_param: { type: STRING(2000), defaultValue: '', comment: '请求参数' },
      json_result: { type: STRING(2000), defaultValue: '', comment: '返回参数' },
      status: { type: INTEGER, defaultValue: 0, comment: '操作状态（0正常 1异常）' },
      error_msg: { type: STRING(2000), defaultValue: '', comment: '错误消息' },
      oper_time: { type: DATE, comment: '操作时间' },
      cost_time: { type: BIGINT, defaultValue: 0, comment: '消耗时间' },
    },
    {
      tableName: 'sys_oper_log',
      comment: '操作日志记录',
      timestamps: false,
    }
  );

  return SysOperLog;
};
