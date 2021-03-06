/**
 * Created by icon on 2021/3/2
 */
const BasicController = require('./basicController');
const utils = require('./../../utils/utils');

const { toInt } = utils;

class ArticleController extends BasicController {
  // 获取
  async list() {
    const {ctx} = this;
    const query = { id: toInt(ctx.params.id), limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    try {
      const data = await this.service.articleService.getArticle(query);
      return this.success(data, 0, '获取成功')
    } catch(e) {
      return this.fail(e.message, 0, '获取失败')
    }
  }
  // 查看一个
  async view() {
    const {ctx} = this;
    const query = { id: toInt(ctx.params.id) };
    try {
      const data = await this.service.articleService.getArticle(query);
      return this.success(data, 0, '获取成功')
    } catch(e) {
      return this.fail(e.message, 0, '获取失败')
    }
  }

  // 新建
  async create() {
    const {ctx} = this;
    const data = ctx.request.body;
    try {
      const res = await this.service.articleService.createArticle(data);
      return this.success(res, 0, '新建成功')
    } catch(e) {
      return this.fail(e.message, 0, '新建失败')
    }
  }
  // 修改
  async update() {
    const {ctx} = this;
    const data = ctx.request.body;
    try {
      data.id = toInt(ctx.params.id);
      const res = await this.service.articleService.updateArticle(data);
      return this.success(res, 0, '修改成功')
    } catch(e) {
      return this.fail(e.message, 0, '修改失败')
    }
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await this.service.articleService.destroyArticle(id);
      return this.success(null, 0, '删除成功')
    } catch(e) {
      return this.fail(e.message, 0, '删除失败')
    }
  }
}

module.exports = ArticleController;
