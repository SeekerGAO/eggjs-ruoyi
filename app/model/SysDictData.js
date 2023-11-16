module.exports = app => {
  const { BIGINT, STRING, INTEGER, CHAR, DATE } = app.Sequelize;

  const SysDictData = app.model.define(
    'SysDictData',
    {
      dict_code: { type: BIGINT, primaryKey: true, autoIncrement: true, comment: '字典编码' },
      dict_sort: { type: INTEGER, defaultValue: 0, comment: '字典排序' },
      dict_label: { type: STRING(100), defaultValue: '', comment: '字典标签' },
      dict_value: { type: STRING(100), defaultValue: '', comment: '字典键值' },
      dict_type: { type: STRING(100), defaultValue: '', comment: '字典类型' },
      css_class: { type: STRING(100), defaultValue: null, comment: '样式属性（其他样式扩展）' },
      list_class: { type: STRING(100), defaultValue: null, comment: '表格回显样式' },
      is_default: { type: CHAR, defaultValue: 'N', comment: '是否默认（Y是 N否）' },
      status: { type: CHAR, defaultValue: '0', comment: '状态（0正常 1停用）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      create_time: { type: DATE, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      update_time: { type: DATE, comment: '更新时间' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
    },
    {
      tableName: 'sys_dict_data',
      comment: '字典数据表',
      timestamps: false,
    }
  );

  return SysDictData;
};
