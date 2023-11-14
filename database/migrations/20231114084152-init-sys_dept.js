'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sys_dept',
      {
        dept_id: {
          type: Sequelize.BIGINT(20),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '部门id',
        },
        parent_id: {
          type: Sequelize.BIGINT(20),
          defaultValue: 0,
          comment: '父部门id',
        },
        ancestors: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '祖级列表',
        },
        dept_name: {
          type: Sequelize.STRING(30),
          defaultValue: '',
          comment: '部门名称',
        },
        order_num: {
          type: Sequelize.INTEGER(4),
          defaultValue: 0,
          comment: '显示顺序',
        },
        leader: {
          type: Sequelize.STRING(20),
          defaultValue: null,
          comment: '负责人',
        },
        phone: {
          type: Sequelize.STRING(11),
          defaultValue: null,
          comment: '联系电话',
        },
        email: {
          type: Sequelize.STRING(50),
          defaultValue: null,
          comment: '邮箱',
        },
        status: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '部门状态（0正常 1停用）',
        },
        del_flag: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '删除标志（0代表存在 2代表删除）',
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
      },
      {
        engine: 'InnoDB',
        autoIncrement: 200,
        comment: '部门表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_dept');
  },
};
