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
  async getByToken(token) {
    const { ctx } = this;
    try {
      return await ctx.model.User.findOne({ where: { token } });
    } catch (e) {
      throw e;
    }
  }
  async login(data) {
    const { ctx } = this;
    const { name, password } = data;
    try {
      const user = await ctx.model.User.findOne({
        where: { name },
      });
      if (user && user.password === password) {
        const token = this.ctx.app.jwt.sign({
          name: user.name,
          password: user.password,
        }, this.app.config.jwt.secret);
        if (user.update({ token })) {
          return user;
        }
        ctx.session.userInfo = user[0];
        return user;
      }
      return null;
    } catch (e) {
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
  async update(data) {
    const { ctx } = this;
    const { id, ...rest } = data;
    try {
      const user = await ctx.model.User.findByPk(id);
      if (!user) {
        return null;
      }
      return await user.update({
        ...rest,
      });
    } catch(e) {
      throw e;
    }
  }
}

module.exports = UserService;

