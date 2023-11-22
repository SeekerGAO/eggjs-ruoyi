'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'gen_table_column',
      {
        column_id: {
          type: Sequelize.BIGINT(20),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '编号',
        },
        table_id: {
          type: Sequelize.BIGINT(20),
          comment: '归属表编号',
        },
        column_name: {
          type: Sequelize.STRING(200),
          comment: '列名称',
        },
        column_comment: {
          type: Sequelize.STRING(500),
          comment: '列描述',
        },
        column_type: {
          type: Sequelize.STRING(100),
          comment: '列类型',
        },
        java_type: {
          type: Sequelize.STRING(500),
          comment: 'JAVA类型',
        },
        java_field: {
          type: Sequelize.STRING(200),
          comment: 'JAVA字段名',
        },
        is_pk: {
          type: Sequelize.CHAR(1),
          comment: '是否主键（1是）',
        },
        is_increment: {
          type: Sequelize.CHAR(1),
          comment: '是否自增（1是）',
        },
        is_required: {
          type: Sequelize.CHAR(1),
          comment: '是否必填（1是）',
        },
        is_insert: {
          type: Sequelize.CHAR(1),
          comment: '是否为插入字段（1是）',
        },
        is_edit: {
          type: Sequelize.CHAR(1),
          comment: '是否编辑字段（1是）',
        },
        is_list: {
          type: Sequelize.CHAR(1),
          comment: '是否列表字段（1是）',
        },
        is_query: {
          type: Sequelize.CHAR(1),
          comment: '是否查询字段（1是）',
        },
        query_type: {
          type: Sequelize.STRING(200),
          defaultValue: 'EQ',
          comment: '查询方式（等于、不等于、大于、小于、范围）',
        },
        html_type: {
          type: Sequelize.STRING(200),
          comment: '显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）',
        },
        dict_type: {
          type: Sequelize.STRING(200),
          defaultValue: '',
          comment: '字典类型',
        },
        sort: {
          type: Sequelize.INTEGER,
          comment: '排序',
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
        engine: 'innodb',
        autoIncrement: 1,
        comment: '代码生成业务表字段',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gen_table_column');
  },
};
