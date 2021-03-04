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
    await this.ctx.render('dist/index.html', {
      context: {
        user: this.ctx.session.userInfo,
      },
    });
  }
}

module.exports = HomeController;
