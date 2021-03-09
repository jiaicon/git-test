'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html', {
      context: {
        user: this.ctx.session.userInfo,
      },
    });
  }
  async home() {
    const { apiHost } = this.app.config;
    await this.ctx.render('dist/index.html', {
      context: JSON.stringify(this.ctx.session.userInfo || null),
      apiHost: JSON.stringify(apiHost || null),
    });
  }
}

module.exports = HomeController;
