'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'gen_table',
      {
        table_id: {
          type: Sequelize.BIGINT(20),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '编号',
        },
        table_name: {
          type: Sequelize.STRING(200),
          defaultValue: '',
          comment: '表名称',
        },
        table_comment: {
          type: Sequelize.STRING(500),
          defaultValue: '',
          comment: '表描述',
        },
        sub_table_name: {
          type: Sequelize.STRING(64),
          defaultValue: null,
          comment: '关联子表的表名',
        },
        sub_table_fk_name: {
          type: Sequelize.STRING(64),
          defaultValue: null,
          comment: '子表关联的外键名',
        },
        class_name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '实体类名称',
        },
        tpl_category: {
          type: Sequelize.STRING(200),
          defaultValue: 'crud',
          comment: '使用的模板（crud单表操作 tree树表操作）',
        },
        package_name: {
          type: Sequelize.STRING(100),
          comment: '生成包路径',
        },
        module_name: {
          type: Sequelize.STRING(30),
          comment: '生成模块名',
        },
        business_name: {
          type: Sequelize.STRING(30),
          comment: '生成业务名',
        },
        function_name: {
          type: Sequelize.STRING(50),
          comment: '生成功能名',
        },
        function_author: {
          type: Sequelize.STRING(50),
          comment: '生成功能作者',
        },
        gen_type: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '生成代码方式（0zip压缩包 1自定义路径）',
        },
        gen_path: {
          type: Sequelize.STRING(200),
          defaultValue: '/',
          comment: '生成路径（不填默认项目路径）',
        },
        options: {
          type: Sequelize.STRING(1000),
          comment: '其它生成选项',
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
        autoIncrement: 1,
        comment: '代码生成业务表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gen_table');
  },
};
