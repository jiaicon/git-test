/**
 * Created by icon on 2021/3/2
 */
'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async verifyUserToken(token) {
    const user = await this.app.model.Users.findAll({
      where: {
        remember_token: token,
      },
    });
    return user;
  }
}

module.exports = userService;

