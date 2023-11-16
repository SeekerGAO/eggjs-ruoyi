module.exports = app => {
  const { BIGINT } = app.Sequelize;

  const SysUserPost = app.model.define(
    'SysUserPost',
    {
      user_id: {
        type: BIGINT,
        allowNull: false,
        comment: '用户ID',
      },
      post_id: {
        type: BIGINT,
        allowNull: false,
        comment: '岗位ID',
      },
    },
    {
      tableName: 'sys_user_post',
      comment: '用户与岗位关联表',
      timestamps: false,
    }
  );

  return SysUserPost;
};
