'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sys_post',
      {
        post_id: {
          type: Sequelize.BIGINT(20),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '岗位ID',
        },
        post_code: {
          type: Sequelize.STRING(64),
          allowNull: false,
          comment: '岗位编码',
        },
        post_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: '岗位名称',
        },
        post_sort: {
          type: Sequelize.INTEGER(4),
          allowNull: false,
          comment: '显示顺序',
        },
        status: {
          type: Sequelize.CHAR(1),
          allowNull: false,
          comment: '状态（0正常 1停用）',
        },
        create_by: {
          type: Sequelize.STRING(64),
          defaultValue: '',
          comment: '创建者',
        },
        create_time: {
          type: Sequelize.DATE,
          comment: '创建时间',
        },
        update_by: {
          type: Sequelize.STRING(64),
          defaultValue: '',
          comment: '更新者',
        },
        update_time: {
          type: Sequelize.DATE,
          comment: '更新时间',
        },
        remark: {
          type: Sequelize.STRING(500),
          defaultValue: null,
          comment: '备注',
        },
      },
      {
        engine: 'InnoDB',
        comment: '岗位信息表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_post');
  },
};
