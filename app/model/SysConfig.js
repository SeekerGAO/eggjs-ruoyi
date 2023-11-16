module.exports = app => {
  const { INTEGER, STRING, CHAR, DATE } = app.Sequelize;

  const SysConfig = app.model.define(
    'SysConfig',
    {
      config_id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '参数主键' },
      config_name: { type: STRING(100), defaultValue: '', comment: '参数名称' },
      config_key: { type: STRING(100), defaultValue: '', comment: '参数键名' },
      config_value: { type: STRING(500), defaultValue: '', comment: '参数键值' },
      config_type: { type: CHAR, defaultValue: 'N', comment: '系统内置（Y是 N否）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      create_time: { type: DATE, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      update_time: { type: DATE, comment: '更新时间' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
    },
    {
      tableName: 'sys_config',
      comment: '参数配置表',
      timestamps: false,
    }
  );

  return SysConfig;
};
