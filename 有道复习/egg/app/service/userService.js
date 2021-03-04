/**
 * Created by icon on 2021/3/3
 */
const Service = require("egg").Service;

class UserService extends Service {
  async getUser(id) {
    const { ctx } = this;
    try {
      const { userInfo } = await ctx.session;
      if (userInfo) {
        return userInfo;
      }
      return await ctx.model.User.findByPk(id);
    } catch (e) {
      throw e;
    }
  }
  async login(data) {
    const { ctx } = this;
    try {
      const user = await ctx.model.User.findAll({
        where: data
      });
      if (user.length) {
        ctx.session.userInfo = user[0];
        return user[0];
      }
      return null;
    } catch(e) {
      throw e;
    }
  }
  async register(data) {
    const { ctx } = this;
    try {
      const user = await ctx.model.User.findOne({
        where: {name: data.name}
      });
      if (user) {
        return null;
      }
      return await this.app.model.User.create({
        ...data,
      });
    } catch(e) {
      throw e;
    }
  }
}

module.exports = UserService;

