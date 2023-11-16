'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_config',
      {
        config_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: '参数主键',
        },
        config_name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '参数名称',
        },
        config_key: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '参数键名',
        },
        config_value: {
          type: Sequelize.STRING(500),
          defaultValue: '',
          comment: '参数键值',
        },
        config_type: {
          type: Sequelize.CHAR,
          defaultValue: 'N',
          comment: '系统内置（Y是 N否）',
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
        comment: '参数配置表',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_config');
  },
};
