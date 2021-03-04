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
    const query = { id: toInt(ctx.query.id), limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
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
      const data = await this.service.articleService.createArticle(data);
      return this.success(data, 0, '新建成功')
    } catch(e) {
      return this.fail(e.message, 0, '新建失败')
    }
  }
  // 修改
  async update() {
    const {ctx} = this;
    const data = ctx.request.body;
    try {
      const data = await this.service.articleService.updateArticle(data);
      return this.success(data, 0, '修改成功')
    } catch(e) {
      return this.fail(e.message, 0, '修改失败')
    }
  }
  // 删除
  async destroy() {
    const {ctx} = this;
    const data = ctx.request.body;
    try {
      await this.service.articleService.destroyArticle(data);
      return this.success(null, 0, '删除成功')
    } catch(e) {
      return this.fail(e.message, 0, '删除失败')
    }
  }
}

module.exports = ArticleController;
