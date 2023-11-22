'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sys_logininfor',
      {
        info_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          comment: '访问ID',
        },
        user_name: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '用户账号',
        },
        ipaddr: {
          type: Sequelize.STRING(128),
          defaultValue: '',
          comment: '登录IP地址',
        },
        login_location: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          comment: '登录地点',
        },
        browser: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '浏览器类型',
        },
        os: {
          type: Sequelize.STRING(50),
          defaultValue: '',
          comment: '操作系统',
        },
        status: {
          type: Sequelize.CHAR,
          defaultValue: '0',
          comment: '登录状态（0成功 1失败）',
        },
        msg: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          comment: '提示消息',
        },
        login_time: {
          type: Sequelize.DATE,
          comment: '访问时间',
        },
      },
      {
        comment: '系统访问记录',
      }
    );

    // Add indexes
    await queryInterface.addIndex('sys_logininfor', [ 'status' ], { name: 'idx_sys_logininfor_s' });
    await queryInterface.addIndex('sys_logininfor', [ 'login_time' ], { name: 'idx_sys_logininfor_lt' });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sys_logininfor');
  },
};
