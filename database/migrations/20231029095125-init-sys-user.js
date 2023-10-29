'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { BIGINT, STRING, DATE } = Sequelize;
    await queryInterface.createTable('sys_user', {
      user_id: { type: BIGINT, primaryKey: true, autoIncrement: true },
      dept_id: BIGINT,
      user_name: STRING(30),
      nick_name: STRING(30),
      user_type: STRING(2),
      email: STRING(50),
      phonenumber: STRING(11),
      sex: STRING(1),
      avatar: STRING(100),
      password: STRING(50),
      status: STRING(1),
      del_flag: STRING(1),
      login_ip: STRING(128),
      login_date: DATE,
      create_by: STRING(64),
      create_time: DATE,
      update_by: STRING(64),
      update_time: DATE,
      remark: STRING(500),
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sys_user');
  },
};
