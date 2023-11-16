'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_user_role',
      {
        user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '用户ID',
        },
        role_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '角色ID',
        },
      },
      {
        comment: '用户和角色关联表',
      }
    );

    await queryInterface.addConstraint('sys_user_role', {
      type: 'primary key',
      fields: [ 'user_id', 'role_id' ],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_user_role');
  },
};
