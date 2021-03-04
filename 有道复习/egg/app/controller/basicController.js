/**
 * Created by icon on 2021/3/2
 */
'use strict';

const Controller = require('egg').Controller;

class BasicController extends Controller {
  async success(data, status, error_msg) {
    const { ctx } = this;
    ctx.body = {
      status: status || 0,
      data,
      error_msg: error_msg || '',
    };
  }
  async fail(data, status, error_msg) {
    const { ctx } = this;
    ctx.body = {
      status: status || 500,
      data,
      error_msg: error_msg || '',
    };
  }
}

module.exports = BasicController;
