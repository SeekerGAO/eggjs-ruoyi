'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_menu',
      {
        menu_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          comment: '菜单ID',
        },
        menu_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: '菜单名称',
        },
        parent_id: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
          comment: '父菜单ID',
        },
        order_num: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '显示顺序',
        },
        path: {
          type: Sequelize.STRING(200),
          defaultValue: '',
          comment: '路由地址',
        },
        component: {
          type: Sequelize.STRING(255),
          defaultValue: null,
          comment: '组件路径',
        },
        query: {
          type: Sequelize.STRING(255),
          defaultValue: null,
          comment: '路由参数',
        },
        is_frame: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          comment: '是否为外链（0是 1否）',
        },
        is_cache: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '是否缓存（0缓存 1不缓存）',
        },
        menu_type: {
          type: Sequelize.CHAR,
          defaultValue: '',
          comment: '菜单类型（M目录 C菜单 F按钮）',
        },
        visible: {
          type: Sequelize.CHAR,
          defaultValue: '0',
          comment: '菜单状态（0显示 1隐藏）',
        },
        status: {
          type: Sequelize.CHAR,
          defaultValue: '0',
          comment: '菜单状态（0正常 1停用）',
        },
        perms: {
          type: Sequelize.STRING(100),
          defaultValue: null,
          comment: '权限标识',
        },
        icon: {
          type: Sequelize.STRING(100),
          defaultValue: '#',
          comment: '菜单图标',
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
          defaultValue: '',
          comment: '备注',
        },
      },
      {
        comment: '菜单权限表',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_menu');
  },
};
