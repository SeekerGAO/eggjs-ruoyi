'use strict';

module.exports = app => {
  const { Sequelize, model } = app;

  const SysNotice = model.define(
    'sys_notice',
    {
      notice_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '公告ID',
      },
      notice_title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '公告标题',
      },
      notice_type: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: '公告类型（1通知 2公告）',
      },
      notice_content: {
        type: Sequelize.BLOB('long'),
        defaultValue: null,
        comment: '公告内容',
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: '0',
        comment: '公告状态（0正常 1关闭）',
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
        type: Sequelize.STRING(255),
        defaultValue: null,
        comment: '备注',
      },
    },
    {
      tableName: 'sys_notice',
      timestamps: false,
      comment: '通知公告表',
    }
  );

  return SysNotice;
};
