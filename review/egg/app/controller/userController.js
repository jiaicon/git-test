/**
 * Created by icon on 2021/3/3
 */
'use strict';

const BasicController = require('./basicController');

class UserController extends BasicController {
  async login() {
    try {
      this.ctx.validate({
        name: {
          type: 'string',
          required: true,
        },
        password: {
          type: 'string',
          required: true,
        },
      });
    } catch (e) {
      return this.fail(e.errors, 500, e.message);
    }
    const { name, password } = this.ctx.request.body;
    try {
      const user = await this.service.userService.login({ name, password });
      if (user) {
        return this.success(user, 0, '获取成功');
      }
      return this.fail(null, 'error', '账号或密码错误');
    } catch (e) {
      return this.fail(null, 500, e.message);
    }
  }

  async register() {
    try {
      this.ctx.validate({
        name: {
          type: 'string',
          required: true,
        },
        password: {
          type: 'string',
          required: true,
        },
        phone: {
          type: 'string',
          max: 12,
        },
      })
    } catch (e) {
      return this.fail(e.errors, 500, e.message)
    }
    const {name, password, phone} = this.ctx.request.body;
    try {
      const user = await this.service.userService.register({name, password, phone});
      if (user) {
        return this.success(user, 0, '新建用户成功');
      }
      return this.fail(null, 401, '新建用户失败')
    } catch (e) {
      return this.fail(null, 500, e.message)
    }
  }

  async update() {
    const { ctx, service } = this;
    try {
      const { id } = ctx.params;
      if (!id || typeof Number(id) !== 'number' || isNaN(id)) {
        throw new Error('Missing id is required');
      }
    } catch (e) {
      return this.fail(e.errors, 500, e.message);
    }
    const { password, phone } = ctx.request.body;
    try {
      const user = await service.userService.update({ phone, password, id: ctx.params.id });
      if (user) {
        return this.success(user, 0, '修改成功');
      }
      return this.fail(null, 401, '修改失败');
    } catch (e) {
      return this.fail(null, 500, e.message);
    }
  }

  async info() {
    try {
      return this.success(this.ctx.session.userInfo, 0, '获取成功');
    } catch (e) {
      return this.fail(null, 500, e.message);
    }
  }

  async currentUser() {
    const token = this.ctx.request.header.authorization;

    try {
      const user = await this.service.userService.getByToken(token);
      if (user) {
        return await this.success(user, 0, '获取成功');
      }
      return await this.fail(null, 500, '获取失败');
    } catch (e) {
      return await this.fail(null, 500, e.message);
    }
  }
}

module.exports = UserController;
