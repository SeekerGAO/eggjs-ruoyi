module.exports = app => {
  const { STRING, INTEGER, CHAR, DATE } = app.Sequelize;
  const SysPost = app.model.define(
    'sys_post',
    {
      post_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '岗位ID',
      },
      post_code: {
        type: STRING(64),
        allowNull: false,
        comment: '岗位编码',
      },
      post_name: {
        type: STRING(50),
        allowNull: false,
        comment: '岗位名称',
      },
      post_sort: {
        type: INTEGER,
        allowNull: false,
        comment: '显示顺序',
      },
      status: {
        type: CHAR(1),
        allowNull: false,
        comment: '状态（0正常 1停用）',
      },
      create_by: {
        type: STRING(64),
        defaultValue: '',
        comment: '创建者',
      },
      create_time: {
        type: DATE,
        comment: '创建时间',
      },
      update_by: {
        type: STRING(64),
        defaultValue: '',
        comment: '更新者',
      },
      update_time: {
        type: DATE,
        comment: '更新时间',
      },
      remark: {
        type: STRING(500),
        defaultValue: null,
        comment: '备注',
      },
    },
    {
      tableName: 'sys_post',
      timestamps: false, // Set to true if you want timestamps
      underscored: true, // Set to true to use snake_case for column names
      comment: '岗位信息表',
    }
  );

  // Add any associations or class methods here if needed

  return SysPost;
};
