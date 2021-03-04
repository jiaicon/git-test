/**
 * Created by icon on 2021/3/2
 */
const path = require('path');

exports.logger = {
  dir: path.join(__dirname, '../logs'),
};

exports.security = {
  csrf: {
    enable: false,
  },
};

exports.sequelize = {
  dialect: 'mysql', // 表示使用mysql
  host: 'localhost', // 连接的数据库主机地址
  port: 3306, // mysql服务端口
  database: 'study', // 数据库名
  username: 'root', // 数据库用户名
  password: 'root', // 数据库密码
  define: { // model的全局配置
    // timestamps: true, // 添加create,update,delete时间戳
    timestamps: false,  // 去除createAt updateAt
    paranoid: false, // 添加软删除
    freezeTableName: true, // 防止修改表名为复数
    underscored: false, // 防止驼峰式字段被默认转为下划线
  },
  timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
  dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
    dateStrings: true,
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
};

