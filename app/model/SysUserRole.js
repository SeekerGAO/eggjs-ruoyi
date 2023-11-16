module.exports = app => {
  const { BIGINT } = app.Sequelize;

  const SysUserRole = app.model.define(
    'sys_user_role',
    {
      user_id: {
        type: BIGINT,
        allowNull: false,
        comment: '用户ID',
      },
      role_id: {
        type: BIGINT,
        allowNull: false,
        comment: '角色ID',
      },
    },
    {
      tableName: 'sys_user_role',
      comment: '用户和角色关联表',
      timestamps: false,
    }
  );

  return SysUserRole;
};
