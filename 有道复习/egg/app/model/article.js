/**
 * Created by icon on 2021/3/2
 */
'use strict';

module.exports = app => {
  const { TEXT, INTEGER, DATE, STRING } = app.Sequelize;

  const Article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: TEXT(),
    title: STRING(32),
    created_at: DATE,
    updated_at: DATE,
  });

  return Article;
};

