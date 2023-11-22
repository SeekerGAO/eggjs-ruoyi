'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sys_user',
      {
        user_id: {
          type: Sequelize.BIGINT(20),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '用户ID',
        },
        dept_id: {
          type: Sequelize.BIGINT(20),
          comment: '部门ID',
        },
        user_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          comment: '用户账号',
        },
        nick_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          comment: '用户昵称',
        },
        user_type: {
          type: Sequelize.STRING(2),
          defaultValue: '00',
          comment: '用户类型（00系统用户）',
        },
        email: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '用户邮箱',
        },
        phonenumber: {
          type: Sequelize.STRING(11),
          defaultValue: '',
          comment: '手机号码',
        },
        sex: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '用户性别（0男 1女 2未知）',
        },
        avatar: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '头像地址',
        },
        password: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '密码',
        },
        status: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '帐号状态（0正常 1停用）',
        },
        del_flag: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '删除标志（0代表存在 2代表删除）',
        },
        login_ip: {
          type: Sequelize.STRING(128),
          defaultValue: '',
          comment: '最后登录IP',
        },
        login_date: {
          type: Sequelize.DATE,
          comment: '最后登录时间',
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
        engine: 'innodb',
        autoIncrement: 100,
        comment: '用户信息表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_user');
  },
};
