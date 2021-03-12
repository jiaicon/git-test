/**
 * Created by icon on 2021/3/11
 */
'use strict';

module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token) {
      try {
        // 解码token
        ctx.app.jwt.verify(token, options.secret);
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.logger.info(error.message);
        ctx.redirect('/admin/login');
        return;
      }
    } else {
      ctx.status = 401;
      this.ctx.logger.info('没有token，未登录');
      ctx.redirect('/admin/login');
      return;
    }
  };
};
