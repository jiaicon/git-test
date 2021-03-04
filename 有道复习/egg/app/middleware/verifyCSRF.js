/**
 * Created by icon on 2021/3/3
 */
var url = require("url");
module.exports = () => {
  return async function verifyCSRF(ctx, next) {
    ctx.state.csrf = ctx.csrf;
    // 1、用户没有登录跳转到登录页面
    // 2、只有登录以后才可以访问后管系统
    let { pathname } = url.parse(ctx.request.url);
    if (ctx.session.userInfo) {
      //如果登录
      await next();
    } else {
      // 排除不需要做权限判断的页面
      if (pathname === "/admin/login") {
        await next();
      } else {
        await next();
        // ctx.redirect("/admin/login");
      }
    }
  };
};

