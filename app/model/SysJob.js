'use strict';

module.exports = app => {
  const { Sequelize, model } = app;

  const SysJob = model.define(
    'sys_job',
    {
      job_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '任务ID',
      },
      job_name: {
        type: Sequelize.STRING(64),
        defaultValue: '',
        comment: '任务名称',
      },
      job_group: {
        type: Sequelize.STRING(64),
        defaultValue: 'DEFAULT',
        comment: '任务组名',
      },
      invoke_target: {
        type: Sequelize.STRING(500),
        allowNull: false,
        comment: '调用目标字符串',
      },
      cron_expression: {
        type: Sequelize.STRING(255),
        defaultValue: '',
        comment: 'cron执行表达式',
      },
      misfire_policy: {
        type: Sequelize.STRING(20),
        defaultValue: '3',
        comment: '计划执行错误策略（1立即执行 2执行一次 3放弃执行）',
      },
      concurrent: {
        type: Sequelize.CHAR(1),
        defaultValue: '1',
        comment: '是否并发执行（0允许 1禁止）',
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: '0',
        comment: '状态（0正常 1暂停）',
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
        comment: '备注信息',
      },
    },
    {
      tableName: 'sys_job',
      timestamps: false,
      comment: '定时任务调度表',
    }
  );

  return SysJob;
};
