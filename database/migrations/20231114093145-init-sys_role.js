'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sys_role',
      {
        role_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          comment: '角色ID',
        },
        role_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          comment: '角色名称',
        },
        role_key: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: '角色权限字符串',
        },
        role_sort: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: '显示顺序',
        },
        data_scope: {
          type: Sequelize.CHAR(1),
          defaultValue: '1',
          comment: '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）',
        },
        menu_check_strictly: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          comment: '菜单树选择项是否关联显示',
        },
        dept_check_strictly: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          comment: '部门树选择项是否关联显示',
        },
        status: {
          type: Sequelize.CHAR(1),
          allowNull: false,
          comment: '角色状态（0正常 1停用）',
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
        remark: {
          type: Sequelize.STRING(500),
          defaultValue: null,
          comment: '备注',
        },
      },
      {
        comment: '角色信息表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_role');
  },
};
