'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_dict_data',
      {
        dict_code: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          comment: '字典编码',
        },
        dict_sort: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '字典排序',
        },
        dict_label: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '字典标签',
        },
        dict_value: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '字典键值',
        },
        dict_type: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '字典类型',
        },
        css_class: {
          type: Sequelize.STRING(100),
          defaultValue: null,
          comment: '样式属性（其他样式扩展）',
        },
        list_class: {
          type: Sequelize.STRING(100),
          defaultValue: null,
          comment: '表格回显样式',
        },
        is_default: {
          type: Sequelize.CHAR,
          defaultValue: 'N',
          comment: '是否默认（Y是 N否）',
        },
        status: {
          type: Sequelize.CHAR,
          defaultValue: '0',
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
        comment: '字典数据表',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_dict_data');
  },
};
