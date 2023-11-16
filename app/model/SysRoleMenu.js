module.exports = app => {
  const { BIGINT } = app.Sequelize;

  const SysRoleMenu = app.model.define(
    'sys_role_menu',
    {
      role_id: {
        type: BIGINT,
        allowNull: false,
        comment: '角色ID',
      },
      menu_id: {
        type: BIGINT,
        allowNull: false,
        comment: '菜单ID',
      },
    },
    {
      tableName: 'sys_role_menu',
      comment: '角色和菜单关联表',
      timestamps: false,
    }
  );

  return SysRoleMenu;
};
