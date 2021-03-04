/**
 * Created by icon on 2021/3/3
 */
'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(32),
    phone: INTEGER(12),
    password: STRING(32),
    token: STRING(32),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
