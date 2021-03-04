/**
 * Created by icon on 2021/3/2
 */
const Service = require('egg').Service;

class ArticleService extends Service {
  async getArticle(query) {
    const { id, ...rest } = query;
    if (id) {
      try {
        return await this.ctx.model.Article.findByPk(id);
      } catch (e) {
        throw e;
      }
    }
    try {
      return await this.ctx.model.Article.findAll(rest);
    } catch (e) {
      throw e;
    }
  }
  async createArticle(data) {
    const { title, content } = data;
    try {
      return await this.ctx.model.Article.create({title, content});
    } catch (e) {
      throw e;
    }
  }
  async updateArticle(data) {
    const { title, content, id } = data;
    const { ctx } = this;
    try {
      const article = await ctx.model.Article.findByPk(id);
      if (!article) {
        return null;
      }
      if (article.update({title, content})) {
        return article;
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
  async destroyArticle(data) {
    const { id } = data;
    const { ctx } = this;
    try {
      const article = await ctx.model.Article.findByPk(id);
      if (!article) {
        return null;
      }
      article.destroy();
      return null;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ArticleService;
