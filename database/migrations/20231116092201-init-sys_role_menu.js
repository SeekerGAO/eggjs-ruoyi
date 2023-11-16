'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_role_menu',
      {
        role_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '角色ID',
        },
        menu_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '菜单ID',
        },
      },
      {
        comment: '角色和菜单关联表',
      }
    );

    await queryInterface.addConstraint('sys_role_menu', {
      type: 'primary key',
      fields: [ 'role_id', 'menu_id' ],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_role_menu');
  },
};
