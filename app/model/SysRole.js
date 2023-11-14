module.exports = app => {
  const { STRING, INTEGER, CHAR, DATE, TINYINT } = app.Sequelize;
  const SysRole = app.model.define(
    'sys_role',
    {
      role_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '角色ID',
      },
      role_name: {
        type: STRING(30),
        allowNull: false,
        comment: '角色名称',
      },
      role_key: {
        type: STRING(100),
        allowNull: false,
        comment: '角色权限字符串',
      },
      role_sort: {
        type: INTEGER,
        allowNull: false,
        comment: '显示顺序',
      },
      data_scope: {
        type: CHAR(1),
        defaultValue: '1',
        comment: '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）',
      },
      menu_check_strictly: {
        type: TINYINT(1),
        defaultValue: 1,
        comment: '菜单树选择项是否关联显示',
      },
      dept_check_strictly: {
        type: TINYINT(1),
        defaultValue: 1,
        comment: '部门树选择项是否关联显示',
      },
      status: {
        type: CHAR(1),
        allowNull: false,
        comment: '角色状态（0正常 1停用）',
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
      remark: {
        type: STRING(500),
        defaultValue: null,
        comment: '备注',
      },
    },
    {
      tableName: 'sys_role',
      timestamps: false, // Set to true if you want timestamps
      underscored: true, // Set to true to use snake_case for column names
      comment: '角色信息表',
    }
  );

  // Add any associations or class methods here if needed

  return SysRole;
};
