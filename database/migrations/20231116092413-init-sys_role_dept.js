'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_role_dept',
      {
        role_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '角色ID',
        },
        dept_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '部门ID',
        },
      },
      {
        comment: '角色和部门关联表',
      }
    );

    await queryInterface.addConstraint('sys_role_dept', {
      type: 'primary key',
      fields: [ 'role_id', 'dept_id' ],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_role_dept');
  },
};
