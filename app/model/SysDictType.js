module.exports = app => {
  const { BIGINT, STRING, CHAR, DATE } = app.Sequelize;

  const SysDictType = app.model.define(
    'SysDictType',
    {
      dict_id: { type: BIGINT, primaryKey: true, autoIncrement: true, comment: '字典主键' },
      dict_name: { type: STRING(100), defaultValue: '', comment: '字典名称' },
      dict_type: { type: STRING(100), defaultValue: '', comment: '字典类型' },
      status: { type: CHAR, defaultValue: '0', comment: '状态（0正常 1停用）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      create_time: { type: DATE, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      update_time: { type: DATE, comment: '更新时间' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
    },
    {
      tableName: 'sys_dict_type',
      comment: '字典类型表',
      timestamps: false,
    }
  );

  return SysDictType;
};
