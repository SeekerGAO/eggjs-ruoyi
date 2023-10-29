module.exports = app => {
  const { BIGINT, STRING, DATE } = app.Sequelize;
  const SysUser = app.model.define('sys_user', {
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

  return SysUser;
};
