'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sys_job_log',
      {
        job_log_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          comment: '任务日志ID',
        },
        job_name: {
          type: Sequelize.STRING(64),
          allowNull: false,
          comment: '任务名称',
        },
        job_group: {
          type: Sequelize.STRING(64),
          allowNull: false,
          comment: '任务组名',
        },
        invoke_target: {
          type: Sequelize.STRING(500),
          allowNull: false,
          comment: '调用目标字符串',
        },
        job_message: {
          type: Sequelize.STRING(500),
          comment: '日志信息',
        },
        status: {
          type: Sequelize.CHAR(1),
          defaultValue: '0',
          comment: '执行状态（0正常 1失败）',
        },
        exception_info: {
          type: Sequelize.STRING(2000),
          defaultValue: '',
          comment: '异常信息',
        },
        create_time: {
          type: Sequelize.DATE,
          comment: '创建时间',
        },
      },
      {
        engine: 'innodb',
        comment: '定时任务调度日志表',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_job_log');
  },
};
