'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_user_post',
      {
        user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '用户ID',
        },
        post_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '岗位ID',
        },
      },
      {
        comment: '用户与岗位关联表',
      }
    );

    await queryInterface.addConstraint('sys_user_post', {
      type: 'primary key',
      fields: [ 'user_id', 'post_id' ],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_user_post');
  },
};
