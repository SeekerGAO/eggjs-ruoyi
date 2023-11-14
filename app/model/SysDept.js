module.exports = app => {
  const { STRING, INTEGER, CHAR, DATE } = app.Sequelize;
  const SysDept = app.model.define(
    'sys_dept',
    {
      dept_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '部门id',
      },
      parent_id: {
        type: INTEGER,
        defaultValue: 0,
        comment: '父部门id',
      },
      ancestors: {
        type: STRING(50),
        defaultValue: '',
        comment: '祖级列表',
      },
      dept_name: {
        type: STRING(30),
        defaultValue: '',
        comment: '部门名称',
      },
      order_num: {
        type: INTEGER,
        defaultValue: 0,
        comment: '显示顺序',
      },
      leader: {
        type: STRING(20),
        defaultValue: null,
        comment: '负责人',
      },
      phone: {
        type: STRING(11),
        defaultValue: null,
        comment: '联系电话',
      },
      email: {
        type: STRING(50),
        defaultValue: null,
        comment: '邮箱',
      },
      status: {
        type: CHAR(1),
        defaultValue: '0',
        comment: '部门状态（0正常 1停用）',
      },
      del_flag: {
        type: CHAR(1),
        defaultValue: '0',
        comment: '删除标志（0代表存在 2代表删除）',
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
    },
    {
      tableName: 'sys_dept',
      timestamps: false, // Set to true if you want timestamps
      underscored: true, // Set to true to use snake_case for column names
      comment: '部门表',
    }
  );

  // Add any associations or class methods here if needed

  return SysDept;
};
