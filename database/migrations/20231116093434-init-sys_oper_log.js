'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_oper_log',
      {
        oper_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          comment: '日志主键',
        },
        title: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '模块标题',
        },
        business_type: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '业务类型（0其它 1新增 2修改 3删除）',
        },
        method: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          comment: '方法名称',
        },
        request_method: {
          type: Sequelize.STRING(10),
          defaultValue: '',
          comment: '请求方式',
        },
        operator_type: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '操作类别（0其它 1后台用户 2手机端用户）',
        },
        oper_name: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '操作人员',
        },
        dept_name: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '部门名称',
        },
        oper_url: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          comment: '请求URL',
        },
        oper_ip: {
          type: Sequelize.STRING(128),
          defaultValue: '',
          comment: '主机地址',
        },
        oper_location: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          comment: '操作地点',
        },
        oper_param: {
          type: Sequelize.STRING(2000),
          defaultValue: '',
          comment: '请求参数',
        },
        json_result: {
          type: Sequelize.STRING(2000),
          defaultValue: '',
          comment: '返回参数',
        },
        status: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '操作状态（0正常 1异常）',
        },
        error_msg: {
          type: Sequelize.STRING(2000),
          defaultValue: '',
          comment: '错误消息',
        },
        oper_time: {
          type: Sequelize.DATE,
          comment: '操作时间',
        },
        cost_time: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
          comment: '消耗时间',
        },
      },
      {
        comment: '操作日志记录',
      }
    );

    await queryInterface.addIndex('sys_oper_log', { fields: [ 'business_type' ], name: 'idx_sys_oper_log_bt' });
    await queryInterface.addIndex('sys_oper_log', { fields: [ 'status' ], name: 'idx_sys_oper_log_s' });
    await queryInterface.addIndex('sys_oper_log', { fields: [ 'oper_time' ], name: 'idx_sys_oper_log_ot' });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_oper_log');
  },
};
