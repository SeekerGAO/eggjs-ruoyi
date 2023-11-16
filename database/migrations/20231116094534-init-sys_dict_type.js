'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_dict_type',
      {
        dict_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          comment: '字典主键',
        },
        dict_name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '字典名称',
        },
        dict_type: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '字典类型',
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
        comment: '字典类型表',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_dict_type');
  },
};
