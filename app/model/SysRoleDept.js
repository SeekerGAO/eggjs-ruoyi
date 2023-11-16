module.exports = app => {
  const { BIGINT } = app.Sequelize;

  const SysRoleDept = app.model.define(
    'SysRoleDept',
    {
      role_id: {
        type: BIGINT,
        allowNull: false,
        comment: '角色ID',
      },
      dept_id: {
        type: BIGINT,
        allowNull: false,
        comment: '部门ID',
      },
    },
    {
      tableName: 'sys_role_dept',
      comment: '角色和部门关联表',
      timestamps: false,
    }
  );

  return SysRoleDept;
};
